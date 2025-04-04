import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ContractService } from '../contract/contract.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseQueryDtoSmart } from 'src/common/dto/base-query.dto';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
import { ContractDto } from '../contract/dto/contract.dto';
import { SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { applySmartInclude } from 'src/common/helpers/smart-include.helper';
import { ContractReportDto } from '../contract/dto/contract_report.dto';

@ApiTags('contract_report')
@Controller('contract_report')
export class ContractReportController {
    constructor(private readonly service: ContractService) { }

    @Get()
    @ApiResponseEntity(ContractReportDto, 'list')
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
            include: (source as any).include ?? [
                { name: 'client', type: 'single' },
                { name: 'kontrak_sebelumnya', type: 'single' },
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
    @ApiResponseEntity(ContractReportDto, 'get')
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.service.findOne(id);

            if (!result) {
                return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
            }

            // Include semua relasi (bisa dari default config atau didefinisikan di controller)
            const allIncludes: SmartQueryInput['include'] = [
                { name: 'client', type: 'single' },
                { name: 'kontrak_sebelumnya', type: 'single' },
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
