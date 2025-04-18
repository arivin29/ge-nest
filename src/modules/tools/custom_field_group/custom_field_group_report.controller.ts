import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CustomFieldGroupService } from '../custom_field_group/custom_field_group.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseQueryDtoSmart } from 'src/common/dto/base-query.dto';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity'; 
import { SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { applySmartInclude } from 'src/common/helpers/smart-include.helper';  
import { ToolsCustomFieldGroupReportDto } from 'src/dto/tools/tools.custom_field_group-report.dto';;

@ApiTags('custom_field_group_report')
@Controller('custom_field_group_report')
export class CustomFieldGroupReportController {
    constructor(private readonly service: CustomFieldGroupService) { }

    @Post('list')
    @ApiResponseEntity(ToolsCustomFieldGroupReportDto, 'list') 
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
    @ApiResponseEntity(ToolsCustomFieldGroupReportDto, 'get')
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.service.findOne(id);

            if (!result) {
                return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
            }

            // Include semua relasi (bisa dari default config atau didefinisikan di controller)
            const allIncludes: SmartQueryInput['include'] = [
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
