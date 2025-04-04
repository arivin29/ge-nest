import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ClientService extends BaseService<Client> {
    constructor(
        @InjectRepository(Client)
        repo: Repository<Client>,
    ) {
        super(repo);
    }

    async findAllCustom(query: {
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

        // Mulai query builder dari entity utama
        const qb = this.repo.createQueryBuilder('e');

        // ✅ JOIN relasi kalau perlu
        qb.leftJoinAndSelect('e.kantor', 'kantor');
        qb.leftJoinAndSelect('e.kontrak', 'kontrak');
        // kamu bisa tambah join lain sesuai kebutuhan

        // ✅ Filter dari entity utama dan relasi
        Object.entries(filter).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                if (key.includes('.')) {
                    // contoh: 'kantor.nama'
                    qb.andWhere(`${key} = :${key.replace('.', '_')}`, {
                        [key.replace('.', '_')]: value,
                    });
                } else {
                    qb.andWhere(`e.${key} = :${key}`, { [key]: value });
                }
            }
        });

        // ✅ Search multi kolom (bisa dari join juga)
        if (search_keyword && search_field.length > 0) {
            qb.andWhere(
                `(${search_field
                    .map((col, i) => `${col} LIKE :search${i}`)
                    .join(' OR ')})`,
                Object.fromEntries(
                    search_field.map((_, i) => [`search${i}`, `%${search_keyword}%`]),
                ),
            );
        }

        // ✅ Sorting
        if (sortKey && sortValue) {
            qb.orderBy(sortKey, sortValue.toUpperCase() as 'ASC' | 'DESC');
        }

        // ✅ Count
        const total = await qb.getCount();

        // ✅ Pagination
        if (pageIndex !== undefined && pageSize !== undefined) {
            qb.skip((pageIndex - 1) * pageSize).take(pageSize);
        } else {
            qb.take(100);
        }

        // ✅ Execute query
        const data = await qb.getMany();
        return { data, total };
    }

}
