import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflow, ToolsWorkflowAggregator, ToolsWorkflowStep } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';
import { ApiProperty } from '@nestjs/swagger';
import { nanoid } from 'nanoid';

@Injectable()
export class WorkflowAggregatorService extends BaseService<ToolsWorkflowAggregator> {
    constructor(
        @InjectRepository(ToolsWorkflowAggregator, 'tools')
        private readonly aggregatorRepo: Repository<ToolsWorkflowAggregator>,

        @InjectRepository(ToolsWorkflow, 'tools')
        private readonly workflowRepo: Repository<ToolsWorkflow>,

        @InjectRepository(ToolsWorkflowStep, 'tools') // 🛠 Tambahkan ini
        private readonly workflowStep: Repository<ToolsWorkflowStep>,

    ) {
        super(aggregatorRepo);
    }
    allow_roles: string[]
    async confirmWorkflow(dto: ConfirmWorkflowDto) {
        const { from_module, from_module_id, id_kantor } = dto;

        // ➤ Cek apakah sudah ada aggregator sebelumnya
        const existing = await this.aggregatorRepo.findOne({
            where: { fromModuleId: from_module_id },
        });

        if (existing) {
            return existing; // atau throw error jika mau lebih strict
        }

        // ➤ Ambil workflow (prioritaskan yg sesuai kantor, fallback ke global)
        const workflow = await this.workflowRepo.findOne({
            where: [
                { forModule: id_kantor },
                { idKantor: id_kantor }
            ],
            order: { idKantor: 'DESC' },
        });

        if (!workflow) throw new NotFoundException('Workflow tidak ditemukan');

        // ➤ Ambil langkah pertama
        const firstStep = await this.workflowStep.findOne({
            where: { idWorkflow: workflow.idWorkflow },
            order: { urutan: 'ASC' },
        });

        if (!firstStep) throw new NotFoundException('Langkah awal workflow tidak ditemukan');

        // ➤ Simpan aggregator baru
        const aggregator = this.aggregatorRepo.create({
            idWorkflowAggregator: nanoid(), // atau pakai UUID
            fromModule: from_module,
            fromModuleId: from_module_id,
            idWorkflow: workflow.idWorkflow,
            lastWorkflowStep: firstStep.idWorkflowStep,
            lastApprovalNote: '',
            lastApprovalUser: dto.user_id,
            lastApprovalStatus: 'draft',
            lastApprovalDate: new Date().toISOString().slice(0, 19).replace('T', ' ')
        });

        return await this.aggregatorRepo.save(aggregator);
    }
}


export class ConfirmWorkflowDto {
    @ApiProperty() from_module: string;
    @ApiProperty() from_module_id: string;
    @ApiProperty() id_kantor?: string;
    @ApiProperty() user_id: string; // bisa diambil dari token
}