import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsDueListOutput } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

import { smartQueryEngineJoinMode, smartQueryRawJoinMode, SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { AmimsDueListOutputDto } from 'src/dto/amims/amims.due_list_output.dto';


@Injectable()
export class DueListOutputService extends BaseService<AmimsDueListOutput> {
    constructor(
        @InjectRepository(AmimsDueListOutput, 'amims')
        repo: Repository<AmimsDueListOutput>,
    ) {
        super(repo);
    }


    async findAllSmart(query: SmartQueryInput) {
        // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsDueListOutputDto);
        // return smartQueryRawJoinMode(this.repo, 'e', query, AmimsDueListOutputDto);

        const idAircraft = query.where?.idAircraft;

        const sql = `
                SELECT a.*, b.price part_price, m.last_price,m.last_price_currency
                FROM erp_amims.due_list_output a,
                    erp_amims.part b,
                    erp_amims.mpart m,
                    erp_amims.part_install c
                WHERE a.id_part = b.id_part
                AND b.id_part = c.id_part
                and a.id_mpart = m.id_mpart
                and b.id_mpart = m.id_mpart
                ${idAircraft ? 'AND c.id_aircraft = ?' : ''}
            `;

        const params = idAircraft ? [idAircraft] : [];
        const result = await this.repo.manager.query(sql, params);
        return { data: result, total: result.length };
    }
}
