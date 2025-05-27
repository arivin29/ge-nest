import { Repository, DeepPartial, ObjectLiteral, getMetadataArgsStorage, SelectQueryBuilder } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class BaseService<T extends ObjectLiteral, D = Partial<T>> {
    constructor(protected readonly repo: Repository<T>) { }

    async findAll(query: {
        pageIndex?: number;
        pageSize?: number;
        filter?: Record<string, any>;
        sortKey?: string;
        sortValue?: 'asc' | 'desc';
        search_field?: string[];
        search_keyword?: string;
    } = {}): Promise<{ data: T[]; total: number }> {
        const {
            pageIndex,
            pageSize,
            filter = {},
            sortKey,
            sortValue,
            search_field = [],
            search_keyword = '',
        } = query;
 
        const qb = this.repo.createQueryBuilder('e'); 
        // Filter
        // Object.entries(filter).forEach(([key, value]) => {
        //     if (value !== undefined && value !== null && value !== '') {
        //         qb.andWhere(`e.${key} = :${key}`, { [key]: value });
        //     }
        // });

        applyFilterToQueryBuilder(qb, filter, 'e');

        function applyFilterToQueryBuilder<T extends ObjectLiteral>(
            qb: SelectQueryBuilder<T>,
            filter: Record<string, any>,
            alias: string = 'e'
        ): void {
          

            for (const [key, value] of Object.entries(filter)) {
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
        }

        // Search
        if (search_keyword && search_field.length > 0) {
            qb.andWhere(
                `(${search_field
                    .map((col, i) => `e.${col} LIKE :search${i}`)
                    .join(' OR ')})`,
                Object.fromEntries(
                    search_field.map((_, i) => [`search${i}`, `%${search_keyword}%`]),
                ),
            );
        }

        // Sort
        if (sortKey && sortValue) {
            qb.orderBy(`e.${sortKey}`, sortValue.toUpperCase() as 'ASC' | 'DESC');
        }
        
        // Pagination
        const total = await qb.getCount();
        if (pageIndex !== undefined && pageSize !== undefined) {
            qb.skip((pageIndex - 1) * pageSize).take(pageSize);
        } else {
            qb.take(100); // default no pagination max 100
        }
        // console.log(qb.getSql())
        const data = await qb.getMany();
        return { data, total };
    }

    


    async findOne(id: string) {
        const entityTarget = (this.repo.target as any); // ini kunci utamanya
        const primaryKey = getMetadataArgsStorage().columns.find(
            (col) => col.target === entityTarget && col.options.primary,
        )?.propertyName;

        if (!primaryKey) {
            throw new Error(`Primary key not found in ${entityTarget.name}`);
        }

        const whereClause = { [primaryKey]: id } as any;
        return this.repo.findOne({ where: whereClause });
    }

    async create(data: D): Promise<T> {
        const entityTarget = this.repo.target as any;
        const primaryKey = getMetadataArgsStorage().columns.find(
            (col) => col.target === entityTarget && col.options.primary
        )?.propertyName;

        if (!primaryKey) {
            throw new Error(`Primary key not found in ${entityTarget.name}`);
        }

        if (!(data as any)[primaryKey]) {
            (data as any)[primaryKey] = uuidv4();
        }

        sanitizeEmptyStrings(data as any);
        convertUtcDatesToLocal(data); // ✅ tambahkan ini

        return this.repo.save(data as any);
    }

    // update(id: any, data: D): Promise<T> {
    //     return this.repo.save({ ...(data as any), id });
    // }
    update(id: any, data: D): Promise<any> {
        convertUtcDatesToLocal(data); // ✅ tambahkan ini
        return this.repo.update(id, data as any);
    }

    async remove(id: any): Promise<void> {
        await this.repo.delete(id);
    }
}

function sanitizeEmptyStrings(obj: any) {
    for (const [key, val] of Object.entries(obj)) {
        if (val === '') {
            obj[key] = null;
        }
    }
}


import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

export function convertUtcDatesToLocal(obj: any, timezoneStr = 'Asia/Jakarta') {
    for (const key in obj) {
        if (!obj[key]) continue;

        // hanya jika nama field mengandung 'tanggal' dan value mengandung Z
        if (
            typeof obj[key] === 'string' &&
            key.toLowerCase().includes('tanggal') &&
            obj[key].includes('T') &&
            obj[key].endsWith('Z')
        ) {
            const parsed = dayjs(obj[key]).tz(timezoneStr).format('YYYY-MM-DD HH:mm:ss');
            obj[key] = parsed;
        }

        // Optional: kalau ada nested object
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            convertUtcDatesToLocal(obj[key], timezoneStr);
        }
    }
}
