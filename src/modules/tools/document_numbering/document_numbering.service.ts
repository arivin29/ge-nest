import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ToolsDocumentNumbering, ToolsDocumentNumberingCounter } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';
import { ToolsDocumentNumberingDto } from 'src/dto/tools/tools.document_numbering.dto';
import { SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';

@Injectable()
export class DocumentNumberingService extends BaseService<ToolsDocumentNumbering> {
    constructor( 

        @InjectRepository(ToolsDocumentNumbering, 'tools')
        repo: Repository<ToolsDocumentNumbering>,

        @InjectRepository(ToolsDocumentNumbering, 'tools')
        private readonly configRepo: Repository<ToolsDocumentNumbering>,

        @InjectRepository(ToolsDocumentNumberingCounter, 'tools')
        private readonly counterRepo: Repository<ToolsDocumentNumberingCounter>,
    ) {
        super(repo);
    }

     

    async generateIfEligible(forModule: string, forModuleId: string, userRoles: string[] = []) {
        const configs = await this.configRepo.find({ where: { forModule, isActive: true } });

        for (const config of configs) {
            const [dbName, tableName] = config.targetTable.split('.');

            // Ambil nilai field target + id_kantor + semua kolom
            const recordRaw = await this.repo.query(
                `SELECT * FROM \`${dbName}\`.\`${tableName}\` WHERE id = ? LIMIT 1`,
                [forModuleId]
            );

            const record = recordRaw?.[0];
            if (!record) continue;

            // Skip kalau sudah punya nomor
            if (record[config.targetColumn]) continue;

            const idKantor = record.id_kantor;

            // Role check
            const allowed = !config.allowedRoles || userRoles.some(role => config.allowedRoles.includes(role));
            if (!allowed) continue;

            // Trigger check (JSON format)
            const trigger = config.triggerStage ? JSON.parse(config.triggerStage) : null;
            if (trigger) {
                const { column, on, value } = trigger;

                const fieldValue = record[column];

                // Validasi trigger
                const isNew = !record[config.targetColumn];
                const isMatch = value === undefined || fieldValue === value;

                if (
                    (on === 'new' && !isNew) ||
                    (on === 'update' && isNew) || // kita anggap "update" dipicu manual dari luar
                    (on !== 'any' && !isMatch)
                ) {
                    continue; // Skip karena tidak memenuhi trigger
                }
            }

            // Generate nomor dan update
            const nomor = await this.generateNomor(config, forModuleId, idKantor);
            await this.repo.query(
                `UPDATE \`${dbName}\`.\`${tableName}\` SET \`${config.targetColumn}\` = ? WHERE id = ?`,
                [nomor, forModuleId],
            );
        }
    }

    async generateNomor(
        config: ToolsDocumentNumberingDto,
        forModuleId: string,
        idKantor?: string,
    ): Promise<string> {
        const now = new Date();
        const tahun = now.getFullYear();
        const bulan = now.getMonth() + 1;

        const key = {
            idDocumentNumbering: config.idDocumentNumbering,
            tahun,
            ...(config.resetPeriode === 'bulan' ? { bulan } : {}),
            ...(idKantor ? { idKantor } : {}),
            forModule: config.forModule,
            forModuleId,
            targetColumn: config.targetColumn,
        };

        let counter = await this.counterRepo.findOne({ where: key });

        if (!counter) {
            counter = this.counterRepo.create({
                idDocumentNumberingCounter: uuidv4(),
                ...key,
                lastNumber: 1,
            });
        } else {
            counter.lastNumber += 1;
        }

        await this.counterRepo.save(counter);

        const nomorFormatted = this.formatNomor(config.formatNomor, {
            tahun,
            bulan,
            nomor: counter.lastNumber,
        });

        return nomorFormatted;
    }

    private formatNomor(template: string, vars: { tahun: number; bulan: number | null; nomor: number }): string {
        return template
            .replace(/\$tahun/g, String(vars.tahun))
            .replace(/\$bulan/g, vars.bulan ? String(vars.bulan).padStart(2, '0') : '')
            .replace(/\$bulan_romawi/g, vars.bulan ? this.toRoman(vars.bulan) : '')
            .replace(/\$nomor/g, String(vars.nomor).padStart(4, '0'));
    }

    private toRoman(n: number): string {
        const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
        return romans[n - 1] || '';
    }
}

