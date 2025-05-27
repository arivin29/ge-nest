import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Query,
} from '@nestjs/common';
import { LogSpService } from './log_sp.service'; 
import { BaseRequestPipe } from 'src/common/pipes/base-request.pipe';
import { ApiResponseHelper } from 'src/common/helpers/response.helper'; 
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';

import { AmimsLogSpDto } from 'src/dto/amims/amims.log_sp.dto';; 
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
 
@ApiTags('log_sp')
@Controller('log_sp')
export class LogSpController {
    constructor(private readonly service: LogSpService) { }

    @Get()
    @ApiResponseEntity(AmimsLogSpDto, 'list')
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
    @ApiResponseEntity(AmimsLogSpDto, 'get')
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

    @Post()
    @ApiBody({ type: AmimsLogSpDto }) 
    @ApiResponseEntity(AmimsLogSpDto, 'post')
    async create(@Body() body: AmimsLogSpDto) {
        try {
            const result = await this.service.create(body);
            return ApiResponseHelper.success(result, 'create');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menambahkan data', 500, error);
        }
    }

    @Put(':id')
    @ApiBody({ type: AmimsLogSpDto })
    @ApiResponseEntity(AmimsLogSpDto, 'put')
    async update(@Param('id') id: string, @Body() body: AmimsLogSpDto) {
        try {
            const result = await this.service.update(id, body);
            return ApiResponseHelper.success(result, 'update');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal memperbarui data', 500, error);
        }
    }

    @Delete(':id')
    @ApiResponseEntity(AmimsLogSpDto, 'delete')
    async remove(@Param('id') id: string) {
        try {
            const result = await this.service.remove(id);
            return ApiResponseHelper.success(result, 'delete');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menghapus data', 500, error);
        }
    }
}
