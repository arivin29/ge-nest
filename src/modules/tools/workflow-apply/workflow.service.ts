import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateWorkflowRules } from './helpers/workflow-rule.helper';
import { ToolsWorkflow, ToolsWorkflowAggregator, ToolsWorkflowLog, ToolsWorkflowStep } from 'src/entities/tools';
import { executeWorkflowTriggers } from './helpers/workflow-trigger.helper';
import { updateDynamicTableRow } from './helpers/smart-table.helper';
import { Repository } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AclUsers } from 'src/entities/acl';
import { nanoid } from 'nanoid';

@Injectable()
export class WorkflowService {
    constructor(
        @InjectRepository(ToolsWorkflow, 'tools')
        private readonly workflowRepo: Repository<ToolsWorkflow>,

        @InjectRepository(ToolsWorkflowStep, 'tools') // 🛠 Tambahkan ini
        private readonly workflowStep: Repository<ToolsWorkflowStep>,

        @InjectRepository(ToolsWorkflowLog, 'tools') // 🛠 Tambahkan ini
        private readonly workflowLog: Repository<ToolsWorkflowLog>,

        @InjectRepository(ToolsWorkflowAggregator, 'tools')
        private readonly aggregatorRepo: Repository<ToolsWorkflowAggregator>,

        @InjectRepository(AclUsers, 'acl')
        private readonly userRepo: Repository<AclUsers>,

    ) { }

    async apply(dto: WorkflowApplyDto) {
        const { from_module, from_module_id, status, catatan, user_id } = dto;

        // ➤ Ambil aggregator
        const aggregator = await this.aggregatorRepo.findOneOrFail({
            where: { fromModule: from_module, fromModuleId: from_module_id },
        });

        // ➤ Ambil langkah sekarang
        if (!aggregator.lastWorkflowStep) {
            throw new BadRequestException('Aggregator tidak memiliki langkah terakhir');
        }
        const currentStep = await this.workflowStep.findOneOrFail({
            where: { idWorkflowStep: aggregator.lastWorkflowStep },
        });

        // ➤ Validasi role
        const user = await this.userRepo.findOneOrFail({ where: { idUsers: user_id } });
        const allowedRoles = this.parseArray(currentStep.allowRoles);
        const allowedUsers = this.parseArray(currentStep.allowUserIds);
 
        // if (
        //     allowedRoles.length &&
        //     !allowedRoles.includes(user.role) &&
        //     !allowedUsers.includes(user_id)
        // ) {
        //     throw new ForbiddenException(`User tidak punya akses approve/reject pada langkah ini`);
        // }

        // ➤ Simpan log approval
        const log = this.workflowLog.create({
            idWorkflowLog: nanoid(),
            idWorkflow: aggregator.idWorkflow,
            idWorkflowStep: currentStep.idWorkflowStep,
            forModule: from_module, // ✅ sesuai entity
            fromModuleId: from_module_id,
            idUsers: user_id,
            namaUser: user.nama, // atau nama dari JWT
            statusBefore: aggregator.lastApprovalStatus || 'draft',
            statusAfter: status,
            approvedBy: user_id,
            approvedAt:  new Date().toISOString().slice(0, 19).replace('T', ' ').slice(0, 19).replace('T', ' '),
            catatan,
        }); 
        await this.workflowLog.save(log);

        // ➤ Update aggregator
        let nextStep:any = null;
        if (status === 'approve') {
            nextStep = await this.workflowStep.findOne({
                where: {
                    idWorkflow: aggregator.idWorkflow,
                    urutan: currentStep.urutan + 1,
                },
            });
        }

        aggregator.lastWorkflowStep = nextStep?.idWorkflowStep ?? currentStep.idWorkflowStep;
        aggregator.lastApprovalUser = user_id;
        aggregator.lastApprovalDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        aggregator.lastApprovalNote = catatan;
        aggregator.updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        aggregator.lastApprovalStatus = status === 'reject' ? 'rejected' : nextStep ? 'in_progress' : 'done';

        await this.aggregatorRepo.save(aggregator);

        return {
            log,
            aggregator,
        };
    }

    private parseArray(val: string | string[] | null | undefined): string[] {
        if (!val) return [];
        if (Array.isArray(val)) return val;
        try {
            return JSON.parse(val);
        } catch {
            return [];
        }
    }
}

export class WorkflowApplyDto {
    @ApiProperty() from_module: string;
    @ApiProperty() from_module_id: string;
    @ApiProperty() status: 'approve' | 'reject';
    @ApiProperty() catatan: string;
    @ApiProperty() user_id: string;
}


