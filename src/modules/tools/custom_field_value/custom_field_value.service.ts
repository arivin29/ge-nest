import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsCustomField, ToolsCustomFieldValue } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

import { smartQueryEngineJoinMode, smartQueryRawJoinMode, SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { ToolsCustomFieldValueDto } from 'src/dto/tools/tools.custom_field_value.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CustomFieldValueService extends BaseService<ToolsCustomFieldValue> {
    constructor(
        @InjectRepository(ToolsCustomField, 'tools')
        repo: Repository<ToolsCustomFieldValue>,

        @InjectRepository(ToolsCustomFieldValue, 'tools')
        private repoValue: Repository<ToolsCustomFieldValue>,
    ) {
        super(repo);
    }

    async getAll(query: SmartQueryInput) {
        const { where = {} } = query;
        const { forModule, forModuleId } = where;
        const fields = await this.repo.createQueryBuilder('f')
            .getMany();

        const values = await this.repoValue.find({
            where: {
                modul: forModule,
                modulId: forModuleId
            }
        })

        // .createQueryBuilder('v')
        // .where('v.modul = :forModule AND v.modul_id = :forModuleId', {
        //     forModule,
        //     forModuleId,
        // })
        // .getMany(); 

        return values;
    }


    async findAllFieldWithValueMerged(query: SmartQueryInput) {
        const { where = {} } = query;
        const { forModule, forModuleId } = where;
        const fields = await this.repo.createQueryBuilder('f')
            .getMany();

        const values = await this.repoValue
            .createQueryBuilder('v')
            .where('v.modul = :forModule AND v.modul_id = :forModuleId', {
                forModule,
                forModuleId,
            })
            .getMany();

        const valueMap = values.reduce((acc, val) => {
            acc[val.idCustomField] = val;
            return acc;
        }, {} as Record<string, any>);

        const merged = fields.map(field => ({
            ...field,
            value: valueMap[field.idCustomField] || null,
        }));

        return merged;
    }


    async upsert(dto: ToolsCustomFieldValueDto) {
        const repo = this.repoValue;

        const existing = await repo.findOne({
            where: {
                idCustomField: dto.idCustomField,
                modul: dto.modul,
                modulId: dto.modulId,
            },
        });
        // console.log('existing', existing)

        if (existing) {
            await repo.update(existing.idCustomFieldValue, {
                nilai: dto.nilai,
                nilaiJson: dto.nilaiJson ?? null,
            });

            return repo.findOneBy({ idCustomFieldValue: existing.idCustomFieldValue });
        } else {
            dto.idCustomFieldValue = uuidv4();
            const entity = repo.create(dto);

            return await repo.save(entity);
        }
    }
}
