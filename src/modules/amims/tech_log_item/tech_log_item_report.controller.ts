import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TechLogItemService } from '../tech_log_item/tech_log_item.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseQueryDtoSmart } from 'src/common/dto/base-query.dto';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity'; 
import { SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { applySmartInclude } from 'src/common/helpers/smart-include.helper';  
import { AmimsTechLogItemReportDto } from 'src/dto/amims/amims.tech_log_item-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPilot } from 'src/entities/amims';

@ApiTags('tech_log_item_report')
@Controller('tech_log_item_report')
export class TechLogItemReportController {
    constructor(
        private readonly service: TechLogItemService,
        @InjectRepository(AmimsPilot, 'amims')
        private readonly pilotRepo: Repository<AmimsPilot>,
    ) { }

    @Post('list')
    @ApiResponseEntity(AmimsTechLogItemReportDto, 'list') 
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
                { name: 'tech_log', type: 'single' },
            ],
        };

        try {
            const result = await this.service.findAllSmart(parsed); 

            // ⬇️ Inject include handler 
            await applySmartInclude(result.data, parsed.include, this.service['repo'].manager); 
            
            // 🔥 Manual inject captain & copilot dari tabel pilot
            if (result.data && result.data.length > 0) {
                for (const item of result.data) {
                    // Inject captain (dari id_captain)
                    if ((item as any).idCaptain) {
                        const captain = await this.pilotRepo.findOne({
                            where: { idPilot: (item as any).idCaptain }
                        });
                        (item as any).captain = captain || null;
                    }

                    // Inject copilot (dari coca_captain)
                    if ((item as any).cocaCaptain) {
                        const copilot = await this.pilotRepo.findOne({
                            where: { idPilot: (item as any).cocaCaptain }
                        });
                        (item as any).copilot = copilot || null;
                    }
                }
            }
            
            return ApiResponseHelper.success(result.data, 'list', undefined, result.total);        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal mengambil data', 500, error);
        }
    }

    @Get(':id')
    @ApiResponseEntity(AmimsTechLogItemReportDto, 'get')
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.service.findOne(id);

            if (!result) {
                return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
            }

            // Include semua relasi (bisa dari default config atau didefinisikan di controller)
            const allIncludes: SmartQueryInput['include'] = [
                { name: 'tech_log', type: 'single' },
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

            // 🔥 Manual inject captain & copilot dari tabel pilot
            if ((result as any).idCaptain) {
                const captain = await this.pilotRepo.findOne({
                    where: { idPilot: (result as any).idCaptain }
                });
                (result as any).captain = captain || null;
            }

            if ((result as any).cocaCaptain) {
                const copilot = await this.pilotRepo.findOne({
                    where: { idPilot: (result as any).cocaCaptain }
                });
                (result as any).copilot = copilot || null;
            }

            return ApiResponseHelper.success(result, 'get');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Terjadi kesalahan', 500, error);
        }
    }
}
