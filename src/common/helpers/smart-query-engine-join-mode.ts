// src/common/helpers/smart-query-engine-join-mode.ts

import { SelectQueryBuilder, Repository, ObjectLiteral } from 'typeorm';


export interface SmartQueryInclude {
    name: string; // nama table/module
    type: 'single' | 'array';
    to?: string; // optional: relasi ke parent (default: base alias)
    parent?: string; // optional: relasi ke parent (default: base alias)
    select?: string[]; // optional: relasi ke parent (default: base alias)
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
            if (qb.expressionMap.joinAttributes.length > 0) {
                const aliasName = `${alias}_${order.by}`;

                qb.addSelect(`${alias}.${order.by}`, `${aliasName}xxx`);
                qb.orderBy(`${aliasName}xxx`, order.direction.toUpperCase() as 'ASC' | 'DESC');
            } else {
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
            else {
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


export async function smartQueryRawJoinMode<T extends ObjectLiteral>(
    repo: Repository<T>,
    alias: string,
    query: SmartQueryInput,
    dtoClass?: new () => T
): Promise<{ data: T[]; total: number }> {
    const metadata = repo.metadata;
    const schema = metadata.schema;
    const table = metadata.tableName;
    const mainTable = schema ? `${schema}.${table}` : table;

    const {
        where = {},
        joinWhere = {},
        fsearch,
        order,
        pagination = { page: 1, limit: 20 },
    } = query;

    const selectFields = dtoClass
        ? Object.keys(new dtoClass()).map(field => {
            const dbField = camelToSnake(field);
            return `${alias}.${dbField} AS ${alias}_${dbField}`;
        })
        : [`${alias}.*`];

    const joins: string[] = [];
    const whereClauses: string[] = [];
    const params: Record<string, any> = {};

    // JOINs
    Object.entries(joinWhere).forEach(([joinName, filters]) => {
        const joinAlias = joinName;
        const joinKey = `id_${joinName}`;
        joins.push(`INNER JOIN ${joinName} ${joinAlias} ON ${joinAlias}.${joinKey} = ${alias}.${joinKey}`);

        if (filters && Object.keys(filters).length > 0) {
            Object.entries(filters).forEach(([field, value]) => {
                const paramKey = `${joinAlias}_${field}`;
                whereClauses.push(`${joinAlias}.${field} = :${paramKey}`);
                params[paramKey] = value;
            });
        } else {
            whereClauses.push(`${joinAlias}.${joinKey} IS NOT NULL`);
        }
    });

    // WHEREs
    Object.entries(where).forEach(([field, value]) => {
        const paramKey = `${alias}_${field}`;
        if (typeof value !== 'object' || value === null) {
            whereClauses.push(`${alias}.${field} = :${paramKey}`);
            params[paramKey] = value;
        } else {
            Object.entries(value).forEach(([op, val]) => {
                const key = `${paramKey}_${op}`;
                switch (op) {
                    case 'eq': whereClauses.push(`${alias}.${field} = :${key}`); params[key] = val; break;
                    case 'ne': whereClauses.push(`${alias}.${field} != :${key}`); params[key] = val; break;
                    case 'gt': whereClauses.push(`${alias}.${field} > :${key}`); params[key] = val; break;
                    case 'gte': whereClauses.push(`${alias}.${field} >= :${key}`); params[key] = val; break;
                    case 'lt': whereClauses.push(`${alias}.${field} < :${key}`); params[key] = val; break;
                    case 'lte': whereClauses.push(`${alias}.${field} <= :${key}`); params[key] = val; break;
                    case 'like': whereClauses.push(`${alias}.${field} LIKE :${key}`); params[key] = `%${val}%`; break;
                    case 'in': whereClauses.push(`${alias}.${field} IN (:...${key})`); params[key] = val; break;
                }
            });
        }
    });

    // Fuzzy search
    if (fsearch?.keyword && fsearch.fields?.length > 0) {
        const fuzzy = fsearch.fields.map((field, i) => `${alias}.${field} LIKE :fuzzy_${i}`);
        fsearch.fields.forEach((_, i) => {
            params[`fuzzy_${i}`] = `%${fsearch.keyword}%`;
        });
        whereClauses.push(`(${fuzzy.join(' OR ')})`);
    }

    // ORDER BY
    let orderByClause = '';
    if (order?.by) {
        const dir = (order.direction || 'ASC').toUpperCase();
        const [tbl, fld] = order.by.includes('.') ? order.by.split('.') : [alias, order.by];
        orderByClause = `ORDER BY ${tbl}.${fld} ${dir}`;
    }

    // PAGINATION
    const limit = pagination.limit ?? 20;
    const offset = (pagination.page - 1) * limit;

    const sql = `
    SELECT ${selectFields.join(', ')}
    FROM ${mainTable} ${alias}
    ${joins.join('\n')}
    ${whereClauses.length > 0 ? 'WHERE ' + whereClauses.join(' AND ') : ''}
    ${orderByClause}
    LIMIT ${limit} OFFSET ${offset}
  `;
    console.log('sql ', sql)

    const [finalSql, sqlParams] = convertNamedParamsToArray(sql, params);
    const data = await repo.manager.query(finalSql, sqlParams);

    const countSql = `
    SELECT COUNT(*) as total
    FROM ${mainTable} ${alias}
    ${joins.join('\n')}
    ${whereClauses.length > 0 ? 'WHERE ' + whereClauses.join(' AND ') : ''}
  `;

    const [finalCountSql, countParams] = convertNamedParamsToArray(countSql, params);
    const countResult = await repo.manager.query(finalCountSql, countParams);
    const total = Number(countResult[0]?.total ?? 0);

    return { data, total };
}

function camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
function convertNamedParamsToArray(sql: string, params: Record<string, any>): [string, any[]] {
    const regex = /:(\w+)/g;
    const values: any[] = [];
    const replaced = sql.replace(regex, (_, key) => {
        values.push(params[key]);
        return '?';
    });
    return [replaced, values];
}