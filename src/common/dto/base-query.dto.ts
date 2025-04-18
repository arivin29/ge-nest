// src/common/dto/base-query.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BaseQueryDto {
    @ApiPropertyOptional({ example: 1 })
    pageIndex?: number;

    @ApiPropertyOptional({ example: 10 })
    pageSize?: number;

    @ApiPropertyOptional({ type: String, description: 'Filter as stringified JSON' })
    filter?: string;

    @ApiPropertyOptional({ example: 'created_at' })
    sortKey?: string;

    @ApiPropertyOptional({ example: 'asc', enum: ['asc', 'desc'] })
    sortValue?: 'asc' | 'desc';

    @ApiPropertyOptional({
        type: [String],
        description: 'Array of searchable fields',
        example: ['nama', 'alamat'],
    })
    search_field?: string[];
 

    @ApiPropertyOptional({ example: 'makmur' })
    search_keyword?: string;
}

export class BaseQueryDtoSmart {
    

    @ApiPropertyOptional({
        type: 'object',
        description: 'Where filter (supports >, >=, <, <=, like, notLike,  in, notIn, isNull, isNotNull)',
        example: {
            id: { in: ['id1', 'id2'] },
            status: { eq: 'aktif' },
            created_at: { between: ['2024-01-01', '2024-12-31'] },
        },
        additionalProperties: true, // ✅ penting!
    })
    filter?: Record<string, any>;

    @ApiPropertyOptional({
        type: 'array',
        description: 'Nama tabel beserta tipenya single atau array',
        example: [
            {
                "name": "contract",
                "type": "single",
                "select": ["idContract", "idClient", "nomorKontrak", "statusKontrak"]
            },
            {
                "name": "client",
                "parent": "contract",
                "type": "single"
            },
            {
                "name": "work_schedule",
                "type": "array"
            }
        ],
        additionalProperties: true, // ✅ penting!
    })
    include?: Record<string, any>;

    @ApiPropertyOptional({
        type: 'array',
        description: 'Filter + jenis JOIN (inner/left/right)',
        example: [
            {
                contract: { status_kontrak: 'aktif' },
                type: 'inner'
            },
            {
                client_site: { kota: 'Jakarta' },
                type: 'left'
            }
        ]
    })
    joinWhere?: Array<Record<string, any> & { type?: 'inner' | 'left' | 'right' }>;


    @ApiPropertyOptional({
        type: [String],
        description: 'Fields to search with search_keyword',
        example: ['contract.nomor_kontrak', 'site.kota']
    })
    search_field?: string[];

    @ApiPropertyOptional({
        type: String,
        description: 'Search keyword',
        example: 'PT'
    })
    search_keyword?: string;

    @ApiPropertyOptional({
        type: String,
        description: 'Sort by field',
        example: 'contract.nomor_kontrak'
    })
    sortKey?: string;

    @ApiPropertyOptional({
        type: String,
        description: 'Sort direction (asc or desc)',
        example: 'asc'
    })
    sortValue?: 'asc' | 'desc';

    @ApiPropertyOptional({
        type: Number,
        description: 'Pagination page index',
        example: 1
    })
    pageIndex?: number;

    @ApiPropertyOptional({
        type: Number,
        description: 'Pagination limit per page',
        example: 20
    })
    pageSize?: number;
}
