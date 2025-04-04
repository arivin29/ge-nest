// src/common/helpers/smart-query-engine-join-mode.ts

import { SelectQueryBuilder, Repository, ObjectLiteral } from 'typeorm';

export interface SmartQueryInclude {
    name: string;               // nama relasi (diambil dari FK: id_<name>)
    type: 'single' | 'array';   // 'single' untuk one-to-one, 'array' untuk one-to-many
    parent?: string;                // jika relasi indirect (misalnya client ke contract)
    select?: string[];          // optional: ambil field tertentu saja
}

export interface SmartQueryInclude {
    name: string; // nama table/module
    type: 'single' | 'array';
    to?: string; // optional: relasi ke parent (default: base alias)
}

export interface SmartQueryInput {
    where?: Record<string, any>;
    joinWhere?: Record<string, Record<string, any>>;
    fsearch?: {
        keyword: string;
        fields: string[];
    };
    order?: {
        by: string;
        direction: 'ASC' | 'DESC';
    };
    pagination?: {
        page: number;
        limit: number;
    };
    select?: {
        type: 'count' | 'sum' | 'avg' | 'min' | 'max';
        field: string;
        alias: string;
    }[];
    groupBy?: string[];
    include?: SmartQueryInclude[];
}

export async function smartQueryEngineJoinMode<T extends ObjectLiteral>(
    repo: Repository<T>,
    alias: string,
    query: SmartQueryInput
): Promise<{ data: T[]; total: number }> {
    const qb = repo.createQueryBuilder(alias);

    const {
        where = {},
        joinWhere = {},
        fsearch,
        order,
        pagination = { page: 1, limit: 20 },
    } = query;

    // Inject INNER JOINs
    Object.keys(joinWhere).forEach((joinName) => {
        const pk = `id_${joinName}`;
        const fk = `${alias}.${pk}`;
        qb.innerJoin(joinName, joinName, `${joinName}.${pk} = ${fk}`);
    });

    // Enhanced where filter
    for (const [key, value] of Object.entries(where)) {
        const field = `${alias}.${key}`;
        if (typeof value !== 'object' || value === null) {
            qb.andWhere(`${field} = :${key}`, { [key]: value });
        } else {
            for (const [op, val] of Object.entries(value as Record<string, any>)) {
                const paramKey = `${key}_${op}`;
                switch (op) {
                    case 'eq': qb.andWhere(`${field} = :${paramKey}`, { [paramKey]: val }); break;
                    case 'ne': qb.andWhere(`${field} != :${paramKey}`, { [paramKey]: val }); break;
                    case 'gt': qb.andWhere(`${field} > :${paramKey}`, { [paramKey]: val }); break;
                    case 'gte': qb.andWhere(`${field} >= :${paramKey}`, { [paramKey]: val }); break;
                    case 'lt': qb.andWhere(`${field} < :${paramKey}`, { [paramKey]: val }); break;
                    case 'lte': qb.andWhere(`${field} <= :${paramKey}`, { [paramKey]: val }); break;
                    case 'like': qb.andWhere(`${field} LIKE :${paramKey}`, { [paramKey]: `%${val}%` }); break;
                    case 'notLike': qb.andWhere(`${field} NOT LIKE :${paramKey}`, { [paramKey]: `%${val}%` }); break;
                    case 'in': qb.andWhere(`${field} IN (:...${paramKey})`, { [paramKey]: val }); break;
                    case 'notIn': qb.andWhere(`${field} NOT IN (:...${paramKey})`, { [paramKey]: val }); break;
                    case 'isNull': qb.andWhere(`${field} IS NULL`); break;
                    case 'isNotNull': qb.andWhere(`${field} IS NOT NULL`); break;
                    case 'between':
                        qb.andWhere(`${field} BETWEEN :${paramKey}_from AND :${paramKey}_to`, {
                            [`${paramKey}_from`]: val[0],
                            [`${paramKey}_to`]: val[1],
                        });
                        break;
                    default:
                        console.warn(`[Unknown Operator] ${op} in ${key}`);
                }
            }
        }
    }

    // Filter joinWhere
    Object.entries(joinWhere).forEach(([joinName, filterObj]) => {
        Object.entries(filterObj).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                const paramKey = `${joinName}_${key}`;
                qb.andWhere(`${joinName}.${key} = :${paramKey}`, {
                    [paramKey]: value,
                });
            }
        });
    });

    // Fuzzy search
    if (fsearch?.keyword && fsearch.fields?.length > 0) {
        const searchConditions = fsearch.fields.map((field, i) => {
            return `${field} LIKE :search_${i}`;
        });
        const searchParams = Object.fromEntries(
            fsearch.fields.map((_, i) => [`search_${i}`, `%${fsearch.keyword}%`])
        );
        qb.andWhere(`(${searchConditions.join(' OR ')})`, searchParams);
    }

    // ORDER
    // ORDER
    if (order?.by && order?.direction) {
        const parts = order.by.split('.');
        const isJoinAlias = parts.length === 2 && joinWhere?.[parts[0]];
        const isBaseField = parts.length === 1;

        if (isBaseField) {
            qb.orderBy(order.by, order.direction.toUpperCase() as 'ASC' | 'DESC');
        } else if (isJoinAlias) {
            const [joinAlias, joinField] = parts;
            const aliasName = `${joinAlias}_${joinField}`;
            qb.addSelect(`${joinAlias}.${joinField}`, aliasName);
            qb.orderBy(aliasName, order.direction.toUpperCase() as 'ASC' | 'DESC');
        } else {
            console.warn(`[SKIPPED] order.by = ${order.by} not allowed without proper join.`);
        }
    }

    // PAGINATION
    if (pagination?.page && pagination?.limit) {
        const skip = (pagination.page - 1) * pagination.limit;
        qb.skip(skip).take(pagination.limit);
    }
 
    const [data, total] = await qb.getManyAndCount();

    
    return { data, total };
}
