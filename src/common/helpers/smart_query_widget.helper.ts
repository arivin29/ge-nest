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
                const col = `${this.alias}.${key}`;
                const paramKey = `where_${key}`;

                if (val && typeof val === 'object' && !Array.isArray(val)) {
                    Object.entries(val).forEach(([op, v]) => {
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

        if (input.joinWhere) {
            Object.keys(input.joinWhere).forEach((joinName) => {
                const pk = `id_${joinName}`;
                const fk = `${this.alias}.${pk}`;
                qb.innerJoin(joinName, joinName, `${joinName}.${pk} = ${fk}`);
            });
        }

        // JOIN WHERE (alias join)
        if (input.joinWhere) {
            Object.entries(input.joinWhere).forEach(([joinName, filterObj]) => {
                Object.entries(filterObj).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        const paramKey = `${joinName}_${key}`;
                        qb.andWhere(`${joinName}.${key} = :${paramKey}`, {
                            [paramKey]: value,
                        });
                    }
                });
            });
            
             
        }

        // GROUP BY
        if (input.groupBy && Array.isArray(input.groupBy)) {
            input.groupBy.forEach((field) => {
                qb.addGroupBy(`${this.alias}.${field}`);
            });
        }

        // SELECT
        if (input.select && Array.isArray(input.select)) {
            qb.select([]); // ⬅️ Clear all default selects first
            input.select.forEach((sel) => {
                const { type, field, alias } = sel;
                qb.addSelect(`${type.toUpperCase()}(${this.alias}.${field})`, alias);
            });
        }

        // ORDER
        // ORDER
        if (input.order?.by) {
            const direction = (input.order.direction ?? 'ASC').toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
            qb.orderBy(`${this.alias}.${input.order.by}`, direction);
        }
        

        return await qb.getRawMany();
    }
}
