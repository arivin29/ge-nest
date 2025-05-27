import { DataSource } from 'typeorm'; 
import { SmartQueryInputWidget } from './smart-query-input-widget';

export class SmartQueryWidget {
    constructor(
        private readonly dataSource: DataSource,
        private readonly table: string,
        private readonly alias: string
    ) { }

    async run(input: SmartQueryInputWidget): Promise<any[]> {
        const qb = this.dataSource.createQueryBuilder(this.table, this.alias);
         
        // WHERE
        if (input.where) {
            Object.entries(input.where).forEach(([key, val]) => {
                const dbField = camelToSnake(key);
                const col = `${this.alias}.${dbField}`;
                const paramKey = `where_${dbField}`;

                if (val === null) {
                    qb.andWhere(`${col} IS NOT NULL`);
                    return;
                }

                if (typeof val !== 'object' || Array.isArray(val)) {
                    qb.andWhere(`${col} = :${paramKey}`, { [paramKey]: val });
                    return;
                }

                

                if (val && typeof val === 'object' && !Array.isArray(val)) { 
                    
                    Object.entries(val).forEach(([op, v]) => {
                        let conditionCol = col;
                        const keyName = `${paramKey}_${op}`;

                        // 👇 Deteksi operator waktu
                        if (['date', 'month', 'year', 'day'].includes(op)) {
                            conditionCol = `${op.toUpperCase()}(${col})`;
                            qb.andWhere(`${conditionCol} = :${keyName}`, { [keyName]: v });
                            return;
                        }
                        
                        switch (op) {
                            case 'eq':
                                qb.andWhere(`${col} = :${paramKey}`, { [paramKey]: v });
                                break;
                            case 'ne':
                                qb.andWhere(`${col} != :${paramKey}`, { [paramKey]: v });
                                break;
                            case 'gt':
                                qb.andWhere(`${col} > :${paramKey}`, { [paramKey]: v });
                                break;
                            case 'gte':
                                qb.andWhere(`${col} >= :${paramKey}`, { [paramKey]: v });
                                break;
                            case 'lt':
                                qb.andWhere(`${col} < :${paramKey}`, { [paramKey]: v });
                                break;
                            case 'lte':
                                qb.andWhere(`${col} <= :${paramKey}`, { [paramKey]: v });
                                break;
                            case 'in':
                                qb.andWhere(`${col} IN (:...${paramKey})`, { [paramKey]: v });
                                break;
                            case 'nin':
                                qb.andWhere(`${col} NOT IN (:...${paramKey})`, { [paramKey]: v });
                                break;
                            case 'like':
                                qb.andWhere(`${col} LIKE :${paramKey}`, { [paramKey]: `%${v}%` });
                                break;
                            case 'isnull':
                                qb.andWhere(`${col} IS ${v ? 'NULL' : 'NOT NULL'}`);
                                break;
                        }
                    });
                } else {
                    // Fallback: value langsung
                    qb.andWhere(`${col} = :${paramKey}`, { [paramKey]: val });
                }
            });
        }

        if (input.joinWhere && Array.isArray(input.joinWhere)) {
            input.joinWhere.forEach((joinItem) => {
                const [joinName, filterObj] = Object.entries(joinItem).find(([k]) => k !== 'type')!;
                const joinType = (joinItem.type || 'inner').toUpperCase();
                const joinAlias = joinName;
                const joinKey = `id_${joinName}`;
                const baseKey = `id_${this.table}`;

                if (joinType === 'WHEREIN') {
                    // ✅ Generate WHERE IN (SELECT...) for subquery filter
                    const subAlias = `sub_${joinAlias}`;
                    const subWhere: string[] = [];
                    const subParams: Record<string, any> = {};

                    Object.entries(filterObj || {}).forEach(([field, value], idx) => {
                        const paramKey = `${joinAlias}_${camelToSnake(field)}`;
                        subWhere.push(`${subAlias}.${camelToSnake(field)} = :${paramKey}`);
                        subParams[paramKey] = value;
                    });

                    const subquery = qb.subQuery()
                        .select(`${subAlias}.${baseKey}`)
                        .from(joinName, subAlias)
                        .where(subWhere.join(' AND '))
                        .getQuery();

                    qb.andWhere(`${this.alias}.${baseKey} IN ${subquery}`, subParams);
                } else {
                    // ✅ Default JOIN + WHERE
                    const pk = `id_${joinName}`;
                    const fk = `${this.alias}.${pk}`;
                    qb.innerJoin(joinName, joinAlias, `${joinAlias}.${pk} = ${fk}`);

                    Object.entries(filterObj || {}).forEach(([key, value]) => {
                        if (value !== undefined && value !== null && value !== '') {
                            const paramKey = `${joinAlias}_${camelToSnake(key)}`;
                            qb.andWhere(`${joinAlias}.${camelToSnake(key)} = :${paramKey}`, {
                                [paramKey]: value,
                            });
                        }
                    });
                }
            });
        }


        // GROUP BY
        // if (input.groupBy && Array.isArray(input.groupBy)) {
        //     input.groupBy.forEach((field) => {
        //         qb.addGroupBy(`${this.alias}.${field}`);
        //     });
        // } 
 
        // SELECT
        if (input.select && Array.isArray(input.select)) {

           

            qb.select([]); // ⬅️ Clear all default selects first
            input.select.forEach(({ type, field, alias }) => {
                const [func, rawField] = field.includes('.') ? field.split('.') : [null, field];
                const snake = camelToSnake(rawField);
                const col = `${this.alias}.${snake}`;
                const selectExpr = func ? `${func.toUpperCase()}(${col})` : `${type.toUpperCase()}(${col})`;

                qb.addSelect(selectExpr, alias);
            });

            // Tambahkan select untuk setiap groupBy (jika belum di-select)
            if (input.groupBy && Array.isArray(input.groupBy)) {
                input.groupBy.forEach((field, i) => {
                    const [func, rawField] = field.includes('.') ? field.split('.') : [null, field];
                    const snake = camelToSnake(rawField);
                    const col = `${this.alias}.${snake}`;
                    const expr = func ? `${func.toUpperCase()}(${col})` : col;

                    // ⬇️ Inject select juga agar sama (misal "status")
                    const aliasName = i === 0 ? 'status' : snake;
                    qb.addSelect(expr, aliasName);  // ✅ inject SELECT for groupBy
                    qb.addGroupBy(expr);            // ✅ GROUP BY expression
                });
            }
        }

        const [sql, params] = qb.getQueryAndParameters(); 
        // console.log('sql ', sql)
        // ORDER
        // ORDER
        if (input.order?.by) {
            const direction = (input.order.direction ?? 'ASC').toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
            // qb.orderBy(`${this.alias}.${input.order.by}`, direction);
            const [fn, rawField] = input.order.by.includes('.') ? input.order.by.split('.') : [null, input.order.by];
            const snake = camelToSnake(rawField);
            const col = `${this.alias}.${snake}`;
            const orderExpr = fn ? `${fn.toUpperCase()}(${col})` : rawField; // ✅ rawField alias langsung

            qb.orderBy(orderExpr, direction);
        }
        

        return await qb.getRawMany();
    }
}

function camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}