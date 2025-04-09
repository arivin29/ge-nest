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

export function applyDefaultSelect<T extends object>(
    qb: SelectQueryBuilder<T>,
    dtoClass: new () => T,
    alias: string
) {
    const dtoInstance = new dtoClass();
    const baseFields = Object.keys(dtoInstance);
    qb.select(baseFields.map(field => `${alias}.${field}`));
}

export async function smartQueryEngineJoinMode<T extends ObjectLiteral>(
    repo: Repository<T>,
    alias: string,
    query: SmartQueryInput,
    dtoClass: new () => T
): Promise<{ data: T[]; total: number }> {

    const qb = repo.createQueryBuilder(alias);
    // Ganti default select dengan field eksplisit
    applyDefaultSelect(qb, dtoClass, alias);
    
    const {
        where = {},
        joinWhere = {},
        fsearch,
        order,
        pagination = { page: 1, limit: 20 },
    } = query;

    // Inject INNER JOINs
    const joinNames = Object.keys(joinWhere);
    joinNames.forEach((joinName) => {
        const pk = `id_${joinName}`;
        const fk = `${alias}.${pk}`;
        qb.innerJoin(joinName, joinName, `${joinName}.${pk} = ${fk}`);

        const joinFilter = joinWhere?.[joinName];

        if (joinFilter && Object.keys(joinFilter).length > 0) {
            // Custom filter dari user
            Object.entries(joinFilter).forEach(([key, value]) => {
                const paramKey = `${joinName}_${key}`;
                qb.andWhere(`${joinName}.${key} = :${paramKey}`, {
                    [paramKey]: value,
                });
            });
        } else {
            // Default: pastikan data relasi tidak null
            qb.andWhere(`${joinName}.${pk} IS NOT NULL`);
        }
    });
    function normalizeKey(key: string): string {
        return key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    }
    // Enhanced where filter
    for (const [rawKey, value] of Object.entries(where)) {
        const key = normalizeKey(rawKey);
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
    Object.entries(joinWhere).forEach(([rawJoinName, filterObj]) => {
        const joinName = normalizeKey(rawJoinName);
        if (filterObj && Object.keys(filterObj).length > 0) {
            Object.entries(filterObj).forEach(([rawKey, value]) => {
                const key = normalizeKey(rawKey);
                if (value !== undefined && value !== null && value !== '') {
                    const paramKey = `${joinName}_${key}`;
                    qb.andWhere(`${joinName}.${key} = :${paramKey}`, {
                        [paramKey]: value,
                    });
                }
            });
        }
    });

    // Fuzzy search
    if (fsearch?.keyword && fsearch.fields?.length > 0) {
        const searchConditions = fsearch.fields.map((field, i) => {
            return `${normalizeKey(field)} LIKE :search_${i}`;
        });
        const searchParams = Object.fromEntries(
            fsearch.fields.map((_, i) => [`search_${i}`, `%${fsearch.keyword}%`])
        );
        qb.andWhere(`(${searchConditions.join(' OR ')})`, searchParams);
    }

    // ORDER

    

    
    if (order?.by && order?.direction) {
        const parts = order.by.split('.').map(part => normalizeKey(part));
        const isBaseField = parts.length === 1;
        const isJoinAlias = parts.length === 2;

        console.log('parts', parts);
        console.log('isJoinAlias', isJoinAlias);
        console.log('isBaseField', isBaseField);
        console.log('joinAttributes', qb.expressionMap.joinAttributes.length);

        if (isBaseField) {
            if (qb.expressionMap.joinAttributes.length > 0)
            {  
                const aliasName = `${alias}_${order.by}`; 

                qb.addSelect(`${alias}.${order.by}`, `${aliasName}xxx`);
                qb.orderBy(`${aliasName}xxx`, order.direction.toUpperCase() as 'ASC' | 'DESC');
            }else
            {
                qb.orderBy(`${alias}.${order.by}`, order.direction.toUpperCase() as 'ASC' | 'DESC');
            }
            
        } else if (isJoinAlias) {
            const [joinAlias, joinField] = parts;

            // ⛔️ Cek apakah sudah di-join
            const joinedAliases = qb.expressionMap.joinAttributes.map(j => j.alias.name);
 
            if (!joinedAliases.includes(joinAlias)) {
                console.warn(`[SKIPPED] ORDER BY ${order.by} → alias '${joinAlias}' belum di-join.`);
                
                const aliasName = `${joinAlias}_${joinField}`;
                qb.addSelect(`${joinAlias}.${joinField}`, `${aliasName}xxx`);
                qb.orderBy(`${aliasName}xxx`, order.direction.toUpperCase() as 'ASC' | 'DESC');
            }
            else
            {
                const aliasName = `${joinAlias}_${joinField}`;
                qb.addSelect(`${joinAlias}.${joinField}`, aliasName);
                qb.orderBy(aliasName, order.direction.toUpperCase() as 'ASC' | 'DESC');
            }

            
        } else {
            console.warn(`[SKIPPED] ORDER BY ${order.by} → tidak valid karena format.`);
        }
    }

    // ORDER
    // if (order?.by && order?.direction) {
    //     const parts = order.by.split('.');
    //     const isBaseField = parts.length === 1;
    //     const isJoinAlias = parts.length === 2 || !!joinWhere?.[parts[0]] || Object.keys(joinWhere || {}).includes(parts[0]);
    //     console.log('isJoinAlias', isJoinAlias)
    //     if (isBaseField) {
    //         qb.orderBy(`${alias}.${order.by}`, order.direction.toUpperCase() as 'ASC' | 'DESC');
    //     } else if (isJoinAlias) {
    //         const [joinAlias, joinField] = parts;
    //         console.log('isJoinAlias', isJoinAlias)
    //         // Cek apakah alias ini memang sudah di-join
    //         const joinedAliases = qb.expressionMap.joinAttributes.map(j => j.alias.name);
    //         if (!joinedAliases.includes(joinAlias)) {
    //             console.warn(`[SKIPPED] order.by = ${order.by} → alias '${joinAlias}' belum di-join.`);
    //             // return { data: [], total: 0 };
    //         }

    //         const aliasName = `${alias}.${joinAlias}_${joinField}`;
    //         // qb.addSelect(`${joinAlias}.${joinField}`, aliasName);
    //         qb.orderBy(aliasName, order.direction.toUpperCase() as 'ASC' | 'DESC');
    //     } else {
    //         console.warn(`[SKIPPED] order.by = ${order.by} not allowed (invalid format)`);
    //     }
    // }
    


    // PAGINATION
    if (pagination?.page && pagination?.limit) {
        const skip = (pagination.page - 1) * pagination.limit;
        qb.skip(skip).take(pagination.limit);
    } 
    // console.log('SQL =>', qb.getSql())
    const [data, total] = await qb.getManyAndCount();
    
    
    return { data, total };
}
