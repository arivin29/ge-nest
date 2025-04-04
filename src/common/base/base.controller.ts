import {
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Query,
    Controller,
    Type,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseRequestPipe } from '../pipes/base-request.pipe';
import { ApiResponseHelper } from '../helpers/response.helper';
import { AutoSwagger } from '../decorators/auto-swagger.decorator';
import { AutoSwaggerQuery } from '../decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from '../dto/base-query.dto';
import { ObjectLiteral } from 'typeorm';
import { ApiResponseEntity } from '../decorators/api-response-entity';


export function BaseControllerFactory<T extends ObjectLiteral>(
    entity: Type<T>,
    tag: string,
) {
    @ApiTags(tag)
    @Controller(tag)
    class BaseController {
        constructor(public readonly service: any) { }

        @Get()
        @AutoSwagger(entity, 'list')
        @AutoSwaggerQuery()
        async findAll(@Query() query: BaseQueryDto) {
            const parsed = {
                pageIndex: parseInt(String(query.pageIndex ?? '1'), 10),
                pageSize: parseInt(String(query.pageSize ?? '10'), 10),
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
        @ApiResponseEntity(entity)
        async findOne(@Param('id') id: string) {
            try {
                const result = await this.service.findOne(id);
                if (!result) {
                    return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
                }
                return ApiResponseHelper.success(result, 'get');
            } catch (error) {
                return ApiResponseHelper.failed(null, 'Terjadi kesalahan saat mencari data', 500, error);
            }
        }

        @Post()
        @AutoSwagger(entity, 'create')
        async create(@Body(new BaseRequestPipe(entity)) body: any) {
            try {
                const result = await this.service.create(body);
                return ApiResponseHelper.success(result, 'create');
            } catch (error) {
                return ApiResponseHelper.failed(null, 'Gagal menambahkan data', 500, error);
            }
        }

        @Put(':id')
        @AutoSwagger(entity, 'update')
        async update(@Param('id') id: string, @Body(new BaseRequestPipe(entity)) body: any) {
            try {
                const result = await this.service.update(id, body);
                return ApiResponseHelper.success(result, 'update');
            } catch (error) {
                return ApiResponseHelper.failed(null, 'Gagal memperbarui data', 500, error);
            }
        }

        @Delete(':id')
        @AutoSwagger(entity, 'delete')
        async remove(@Param('id') id: string) {
            try {
                const result = await this.service.remove(id);
                return ApiResponseHelper.success(result, 'delete');
            } catch (error) {
                return ApiResponseHelper.failed(null, 'Gagal menghapus data', 500, error);
            }
        }
    }

    return BaseController;
}
