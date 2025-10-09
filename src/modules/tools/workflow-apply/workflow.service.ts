import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateWorkflowRules } from './helpers/workflow-rule.helper';
import { ToolsWorkflow, ToolsWorkflowAggregator, ToolsWorkflowLog, ToolsWorkflowStep } from 'src/entities/tools';
import { executeWorkflowTriggers } from './helpers/workflow-trigger.helper';
import { Repository } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { AclUsers } from 'src/entities/acl';
import { nanoid } from 'nanoid'; 
// import { RedisPublishHelperPenormoran } from 'src/common/redis/penomoram/redis-publish.helper';

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

        // private redisPublishHelperPenormoran: RedisPublishHelperPenormoran

    ) { }
  
    async apply(dto: WorkflowApplyDto) {
        const { from_module, from_module_id, status, catatan, user_id } = dto;

        // ➤ Ambil aggregator
        const aggregator = await this.aggregatorRepo.findOneOrFail({
            where: { fromModule: from_module, fromModuleId: from_module_id },
        });

        // ➤ Ambil langkah sekarang
        let currentStep = await this.workflowStep.findOne({
            where: { idWorkflowStep: aggregator.lastWorkflowStep },
        });

        if (!currentStep) {
            const fallbackStatus = aggregator.lastApprovalStatus || 'draft';
            currentStep = await this.workflowStep.findOne({
                where: {
                    idWorkflow: aggregator.idWorkflow,
                    statusFrom: fallbackStatus,
                },
                order: { urutan: 'ASC' },
            });

            if (!currentStep) {
                throw new BadRequestException(
                    `Langkah workflow aktif tidak ditemukan (status: ${fallbackStatus}). Pastikan data workflow_step telah di-seed dengan benar.`,
                );
            }

            aggregator.lastWorkflowStep = currentStep.idWorkflowStep;
        }

        // ➤ Validasi role
        const user = await this.userRepo.findOneOrFail({ where: { idUsers: user_id } });
        const allowedRoles = this.parseArray(currentStep.allowRoles);
        const allowedUsers = this.parseArray(currentStep.allowUserIds);
 
        console.log({user, allowedRoles, allowedUsers});
        if (
            (allowedRoles.length && !allowedRoles.includes(String(user.idIzinPosisi))) ||
            (allowedUsers.length && !allowedUsers.includes(user_id))
        ) {
            throw new ForbiddenException(`User tidak punya akses approve/reject pada langkah ini`);
        }
        const workflow = await this.workflowRepo.findOne({
            where: { idWorkflow: aggregator.idWorkflow }
        });

        if (!workflow) {
            throw new BadRequestException(`Workflow ${aggregator.idWorkflow} tidak ditemukan`);
        }

        const targetMeta = await this.resolveTargetMetadata(workflow);
        const targetRecord = await this.fetchTargetRecord(workflow, targetMeta.targetIdColumn, from_module_id);

        if (!targetRecord) {
            console.warn('[workflow-apply] target record tidak ditemukan', {
                targetDb: workflow.targetDb,
                targetTable: workflow.targetTable,
                targetIdColumn: targetMeta.targetIdColumn,
                fromModuleId: from_module_id,
            });
        }

        const ruleDefinition = this.parseJson(currentStep.ruleJson);
        if (status === 'approve' && ruleDefinition) {
            const rulePassed = await validateWorkflowRules(ruleDefinition, {
                id: String(from_module_id),
                data: targetRecord,
                db: workflow.targetDb,
                queryRunner: {
                    query: (sql: string, params?: any[]) => this.aggregatorRepo.query(sql, params),
                },
            });

            if (!rulePassed) {
                throw new BadRequestException('Aturan workflow tidak terpenuhi pada langkah ini');
            }
        }

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
        else
        {
            nextStep = await this.workflowStep.findOne({
                where: {
                    idWorkflow: aggregator.idWorkflow,
                    urutan: currentStep.statusRejectTo ? (currentStep.statusRejectTo) : 1,
                },
            });
        }

        aggregator.lastWorkflowStep = (nextStep?.idWorkflowStep) ;
        aggregator.lastApprovalUser = user_id;
        aggregator.lastApprovalDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        aggregator.lastApprovalNote = catatan;
        aggregator.updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        // aggregator.lastApprovalStatus = status === 'reject' ? 'rejected' : nextStep ? 'in_progress' : 'done';
        aggregator.lastApprovalStatus = status === 'approve' ? currentStep.statusTo : currentStep.statusFrom;

        await this.aggregatorRepo.save(aggregator);

        const {
            baseTargetTable,
            strippedTableName,
            candidateStatusFields,
            candidateIdColumns,
            targetStatusField,
            targetIdColumn,
        } = targetMeta;

        console.log('[workflow-apply] update status target', {
            workflowId: workflow?.idWorkflow,
            targetDb: workflow?.targetDb,
            targetTable: workflow?.targetTable,
            strippedTableName,
            targetStatusField,
            candidateStatusFields,
            candidateIdColumns,
            targetIdColumn,
            fromModule: from_module,
            fromModuleId: from_module_id,
            lastApprovalStatus: aggregator.lastApprovalStatus,
        });

        const updateResult = await this.aggregatorRepo.query(
            `UPDATE \`${workflow?.targetDb}\`.\`${workflow?.targetTable}\` SET \`${targetStatusField}\` = ? WHERE \`${targetIdColumn}\` = ?`,
            [aggregator.lastApprovalStatus, from_module_id],
        ); 

        let affectedRows: number | undefined;
        if (Array.isArray(updateResult)) {
            const first = updateResult[0] as any;
            affectedRows = first?.affectedRows ?? first?.[0]?.affectedRows;
        } else if (updateResult && typeof updateResult === 'object') {
            affectedRows = (updateResult as any)?.affectedRows;
        }

        console.log('[workflow-apply] update result', updateResult, 'affectedRows:', affectedRows);

        if (!affectedRows) {
            console.warn('[workflow-apply] no rows updated for target table', {
                targetDb: workflow?.targetDb,
                targetTable: workflow?.targetTable,
                targetIdColumn,
                fromModuleId: from_module_id,
            });
        }

        console.log('[workflow-apply] aggregator snapshot', {
            idWorkflowAggregator: aggregator.idWorkflowAggregator,
            lastWorkflowStep: aggregator.lastWorkflowStep,
            lastApprovalStatus: aggregator.lastApprovalStatus,
            lastApprovalUser: aggregator.lastApprovalUser,
        });

        const triggerDefinition = this.parseJson(currentStep.triggerJson);
        if (triggerDefinition) {
            const latestTargetRecord = await this.fetchTargetRecord(workflow, targetMeta.targetIdColumn, from_module_id);
            await executeWorkflowTriggers(triggerDefinition, {
                id: String(from_module_id),
                data: latestTargetRecord ?? targetRecord,
                db: workflow.targetDb,
                queryRunner: {
                    query: (sql: string, params?: any[]) => this.aggregatorRepo.query(sql, params),
                },
            });
        }

        // await this.redisPublishHelperPenormoran.publishDocumentNumberingEvent({
        //     forModule: from_module,
        //     forModuleId: from_module_id,
        //     id_users: user_id, // ambil dari context
        //     trigger: 'workflow',
        // });
        
        return {
            log,
            aggregator,
        };
    }

    private parseJson<T>(val: string | T | null | undefined): T | null {
        if (!val) return null;
        if (typeof val === 'object') return val as T;
        if (typeof val === 'string') {
            try {
                return JSON.parse(val) as T;
            } catch (error) {
                console.warn('[workflow-apply] gagal parse JSON', { val, error: (error as Error).message });
                return null;
            }
        }
        return null;
    }

    private async fetchTargetRecord(workflow: ToolsWorkflow, targetIdColumn: string, targetId: string | number) {
        if (!workflow.targetDb || !workflow.targetTable) return null;

        const rows = await this.aggregatorRepo.query(
            `SELECT * FROM \`${workflow.targetDb}\`.\`${workflow.targetTable}\` WHERE \`${targetIdColumn}\` = ? LIMIT 1`,
            [targetId],
        );

        if (Array.isArray(rows) && rows.length) {
            return rows[0];
        }

        return null;
    }

    private async resolveTargetMetadata(workflow: ToolsWorkflow) {
        const baseTargetTable = workflow?.targetTable || '';
        if (!baseTargetTable) {
            throw new BadRequestException(`Workflow ${workflow?.idWorkflow} tidak memiliki target table`);
        }

        const strippedTableName = baseTargetTable.startsWith('t_') || baseTargetTable.startsWith('m_')
            ? baseTargetTable.slice(2)
            : baseTargetTable;

        const candidateStatusFields = Array.from(new Set([
            workflow?.statusField,
            baseTargetTable ? `status_${baseTargetTable}` : null,
            strippedTableName ? `status_${strippedTableName}` : null,
            'status_permohonan',
            'status',
        ].filter(Boolean) as string[]));

        let targetStatusField: string | undefined;
        for (const candidate of candidateStatusFields) {
            const exists = await this.columnExists(workflow.targetDb, baseTargetTable, candidate);
            if (exists) {
                targetStatusField = candidate;
                break;
            }
        }

        if (!targetStatusField && candidateStatusFields.length) {
            targetStatusField = candidateStatusFields[0];
        }

        if (!targetStatusField) {
            throw new BadRequestException(`Kolom status tidak ditemukan untuk tabel ${workflow?.targetDb}.${baseTargetTable}`);
        }

        const candidateIdColumns = Array.from(new Set([
            baseTargetTable ? `id_${baseTargetTable}` : null,
            strippedTableName ? `id_${strippedTableName}` : null,
            'id',
        ].filter(Boolean) as string[]));

        let targetIdColumn: string | undefined;
        for (const candidate of candidateIdColumns) {
            const exists = await this.columnExists(workflow.targetDb, baseTargetTable, candidate);
            if (exists) {
                targetIdColumn = candidate;
                break;
            }
        }

        if (!targetIdColumn && candidateIdColumns.length) {
            targetIdColumn = candidateIdColumns[0];
        }

        if (!targetIdColumn) {
            throw new BadRequestException(`Kolom ID tidak ditemukan untuk tabel ${workflow?.targetDb}.${baseTargetTable}`);
        }

        return {
            baseTargetTable,
            strippedTableName,
            candidateStatusFields,
            candidateIdColumns,
            targetStatusField,
            targetIdColumn,
        };
    }

    private async columnExists(schema: string | null, table: string, column: string): Promise<boolean> {
        if (!schema) return false;

        const result = await this.aggregatorRepo.query(
            'SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ? LIMIT 1',
            [schema, table, column],
        );

        return Array.isArray(result) && result.length > 0;
    }

    private parseArray(val: string | string[] | null | undefined): string[] {
        if (!val) return [];
        if (Array.isArray(val)) return val.map(v => String(v));
        try {
            const parsed = JSON.parse(val);
            return Array.isArray(parsed) ? parsed.map(v => String(v)) : [];
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
