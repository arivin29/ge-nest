import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartInstall } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

import { smartQueryEngineJoinMode, smartQueryRawJoinMode, SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { AmimsPartInstallDto } from 'src/dto/amims/amims.part_install.dto';


@Injectable()
export class PartInstallService extends BaseService<AmimsPartInstall> {
    constructor(
        @InjectRepository(AmimsPartInstall, 'amims')
        repo: Repository<AmimsPartInstall>,
    ) {
        super(repo);
    }


    async findAllSmart(query: SmartQueryInput) {
        // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartInstallDto);
        return smartQueryRawJoinMode(this.repo, 'e', query, AmimsPartInstallDto);
    }

    async findAll(query: {
        pageIndex?: number;
        pageSize?: number;
        filter?: Record<string, any>;
        sortKey?: string;
        sortValue?: 'asc' | 'desc';
        search_field?: string[];
        search_keyword?: string;
    } = {}): Promise<{ data: any[]; total: number }> {
        const {
            pageIndex,
            pageSize,
            filter = {},
            sortKey,
            sortValue,
            search_field = [],
            search_keyword = '',
        } = query;

        // Build WHERE clause
        const whereClauses: string[] = [];
        const params: Record<string, any> = {};

        // Filter
        let paramIndex = 0;
        

        // Filter
        if (filter && typeof filter === 'object') {
            Object.entries(filter).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                // Convert camelCase to snake_case for column names
                const col = key.replace(/([A-Z])/g, '_$1').toLowerCase();
                paramIndex++;
                whereClauses.push(`e.${col} = '${value}'`);
            }
            });
        }

        // Search
        if (search_keyword && search_field.length > 0) {
            // Map incoming search_field to actual column names
            const fieldMap: Record<string, string> = {
            partnumber: 'part_number',
            keyword: 'keyword',
            sn: 'sn',
            };
            const validColumns = ['part_number', 'keyword', 'sn'];
            const searchClauses = search_field
            .map(f => fieldMap[f.toLowerCase()] || f.toLowerCase())
            .filter(col => validColumns.includes(col))
            .map((col) => {
                return `e.${col} LIKE '%${search_keyword}%'`;
            });
            if (searchClauses.length > 0) {
            whereClauses.push(`(${searchClauses.join(' OR ')})`);
            }
        }

        // Build SQL
        let sql = ` select * from ( SELECT e.*, b.sn,c.part_number, c.keyword , c.id_mpart FROM part_install e
                        inner join part b on e.id_part = b.id_part
                        inner join mpart c on b.id_mpart = c.id_mpart )  as e
                         `;
        if (whereClauses.length > 0) {
            sql += ` WHERE ${whereClauses.join(' AND ')}`;
        }
        if (sortKey && sortValue) {
            sql += ` ORDER BY e.${sortKey} ${sortValue.toUpperCase()}`;
        }
        if (pageIndex !== undefined && pageSize !== undefined) {
            sql += ` LIMIT ${pageSize} OFFSET ${(pageIndex - 1) * pageSize}`;
        } else {
            sql += ` LIMIT 100`;
        }

        // Count SQL
        let countSql = `select count(*) as total from ( SELECT e.*, b.sn,c.part_number, c.keyword FROM part_install e
                        inner join part b on e.id_part = b.id_part
                        inner join mpart c on b.id_mpart = c.id_mpart )  as e`;
        if (whereClauses.length > 0) {
            countSql += ` WHERE ${whereClauses.join(' AND ')}`;
        }

        // Execute
        // Convert params object to array in the order of appearance in the SQL
        const getParamArray = (sqlStr: string, paramsObj: Record<string, any>) => {
            const paramMatches = [...sqlStr.matchAll(/:(\.\.\.)?([a-zA-Z0-9_]+)/g)];
            const arr: any[] = [];
            for (const match of paramMatches) {
            const key = match[2];
            if (match[1] === '...') {
                // Spread parameter (array)
                arr.push(...(paramsObj[key] ?? []));
            } else if (paramsObj.hasOwnProperty(key)) {
                arr.push(paramsObj[key]);
            }
            }
            return arr;
        };

        // Debug SQL and params
        // console.debug('SQL:', sql);
        // console.debug('Params:', getParamArray(sql, params));
        // console.debug('Count SQL:', countSql);
        // console.debug('Count Params:', getParamArray(countSql, params));

        const dataRaw = await this.repo.query(sql, getParamArray(sql, params));
        // Convert snake_case keys to camelCase
        const toCamel = (s: string) => s.replace(/_([a-z])/g, g => g[1].toUpperCase());
        const data = dataRaw.map((row: Record<string, any>) => {
            const newRow: Record<string, any> = {};
            for (const key in row) {
            newRow[toCamel(key)] = row[key];
            }
            return newRow;
        });
        const countResult = await this.repo.query(countSql, getParamArray(countSql, params));
        const total = countResult[0]?.total ? Number(countResult[0].total) : 0;

        return { data, total };
    }
}
