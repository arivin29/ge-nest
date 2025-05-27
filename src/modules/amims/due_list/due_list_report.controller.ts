import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DueListService } from '../due_list/due_list.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseQueryDtoSmart } from 'src/common/dto/base-query.dto';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity'; 
import { SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { applySmartInclude } from 'src/common/helpers/smart-include.helper';  
import { AmimsDueListReportDto } from 'src/dto/amims/amims.due_list-report.dto';;

@ApiTags('due_list_report')
@Controller('due_list_report')
export class DueListReportController {
    constructor(private readonly service: DueListService) { }

    @Post('list')
    @ApiResponseEntity(AmimsDueListReportDto, 'list') 
    async findAll( 
        @Body() body: BaseQueryDtoSmart
    ) {
        const isString = (val: any) => typeof val === 'string';
        const source = body;
  
        const parsed: SmartQueryInput = {
            where: source.filter ?? {},
            joinWhere: (source as any).joinWhere ?? [],
            fsearch: (source as any).search_keyword
                ? {
                    keyword: (source as any).search_keyword,
                    fields: (source as any).search_field ?? [],
                }
                : (source as any).fsearch,
            order: (source as any).sortKey
                ? {
                    by: (source as any).sortKey,
                    direction: (source as any).sortValue ?? 'asc',
                }
                : (source as any).order,

            pagination: {
                page: parseInt(String((source as any).pageIndex ?? (source as any).pagination?.page ?? '1'), 10),
                limit: parseInt(String((source as any).pageSize ?? (source as any).pagination?.limit ?? '10'), 10),
            },
            include: (source as any).include ?? [
                                                { name: 'aircraft', type: 'single' },
                                                { name: 'part', type: 'single' },
                                                { name: 'type_ofwork', type: 'single' },
                                                { name: 'mantenance', type: 'single' },
                                ],   // mohon di isi dengan default dari id_xxx
        };

        try {
            const result = await this.service.findAllSmart(parsed); 
            // ⬇️ Inject include handler 
            await applySmartInclude(result.data, parsed.include, this.service['repo'].manager); 
            return ApiResponseHelper.success(result.data, 'list', undefined, result.total);

        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal mengambil data', 500, error);
        }
    }

    @Get(':id')
    @ApiResponseEntity(AmimsDueListReportDto, 'get')
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.service.findOne(id);

            if (!result) {
                return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
            }

            // Include semua relasi (bisa dari default config atau didefinisikan di controller)
            const allIncludes: SmartQueryInput['include'] = [
                                                { name: 'aircraft', type: 'single' },
                                                { name: 'part', type: 'single' },
                                                { name: 'type_ofwork', type: 'single' },
                                                { name: 'mantenance', type: 'single' },
                                ];

            // Filter hanya yang punya id_<name> di data
            const toCamel = (s: string) => s.replace(/_([a-z])/g, (_, g) => g.toUpperCase());
            const filteredIncludes = allIncludes.filter((inc) => {
                const possibleKeys = [
                    `id_${inc.name}`, // snake_case
                    'id' + inc.name[0].toUpperCase() + inc.name.slice(1), // camelCase
                    toCamel(`id_${inc.name}`)  // idClientSite
                ];
                return possibleKeys.some(key => Object.keys(result).includes(key));
            });
            
            // Jalankan include
            await applySmartInclude([result], filteredIncludes, this.service['repo'].manager);
            return ApiResponseHelper.success(result, 'get');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Terjadi kesalahan', 500, error);
        }
    }
}
