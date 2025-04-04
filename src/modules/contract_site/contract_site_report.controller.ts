import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ContractSiteService } from '../contract_site/contract_site.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseQueryDtoSmart } from 'src/common/dto/base-query.dto';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
import { ContractSiteDto } from '../contract_site/dto/contract_site.dto';
import { SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { applySmartInclude } from 'src/common/helpers/smart-include.helper';

@ApiTags('contract_site_report')
@Controller('contract_site_report')
export class ContractSiteReportController {
    constructor(private readonly service: ContractSiteService) { }

    @Get()
    @ApiResponseEntity(ContractSiteDto, 'list')
    @AutoSwaggerQuery()
    async findAll(
        @Query() query: BaseQueryDtoSmart,
        @Body() body: BaseQueryDtoSmart
    ) {
        type InputUnion = BaseQueryDtoSmart | SmartQueryInput;

        const isQueryMode = query.filter !== undefined || query.joinWhere !== undefined || query.search_keyword !== undefined;

        const source: InputUnion = isQueryMode ? query : body;

        const isString = (val: any) => typeof val === 'string';

        const parsed: SmartQueryInput = {
            where: isString((source as any).filter)
                ? JSON.parse((source as any).filter)
                : (source as any).where ?? (source as any).filter ?? {},

            joinWhere: isString((source as any).joinWhere)
                ? JSON.parse((source as any).joinWhere)
                : (source as any).joinWhere ?? {},

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
            include: (source as any).include ?? [],
        };

        // console.log('[DEBUG parsed]', parsed);

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
    @ApiResponseEntity(ContractSiteDto, 'get')
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.service.findOne(id);
            if (!result) {
                return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
            }
            return ApiResponseHelper.success(result, 'get');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Terjadi kesalahan', 500, error);
        }
    }
}
