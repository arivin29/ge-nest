import {
    Controller,
    Get,
    Param,
    Query,
} from '@nestjs/common';
import { MaintenanceProgramDocumentService } from './maintenance_program_document.service'; 
import { ApiResponseHelper } from 'src/common/helpers/response.helper'; 
import { ApiTags } from '@nestjs/swagger';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';
import { AmimsMaintenanceProgramDocumentDto } from 'src/dto/amims/amims.maintenance_program_document.dto'; 
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
 
@ApiTags('maintenance_program_document')
@Controller('maintenance_program_document')
export class MaintenanceProgramDocumentController {
    constructor(private readonly service: MaintenanceProgramDocumentService) { }

    @Get()
    @ApiResponseEntity(AmimsMaintenanceProgramDocumentDto, 'list')
    @AutoSwaggerQuery()
    async findAll(@Query() query: BaseQueryDto) {
        const parsed = {
            pageIndex: parseInt(String(query.pageIndex ?? '1'), 10),
            pageSize: parseInt(String(query.pageSize ?? '1000'), 10),
            filter: query.filter ? JSON.parse(query.filter) : {},
            sortKey: query.sortKey,
            sortValue: query.sortValue,
            search_field: query.search_field ?? [],
            search_keyword: query.search_keyword ?? '',
        };

        try {
            const result = await this.service.findAll(parsed);
            return ApiResponseHelper.success(result.data, 'list', undefined, result.total);
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal mengambil data', 500, error);
        }
    }

    @Get(':id')
    @ApiResponseEntity(AmimsMaintenanceProgramDocumentDto, 'get')
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
