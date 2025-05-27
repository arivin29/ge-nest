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
import { UsersService } from './users.service';
import { BaseRequestPipe } from 'src/common/pipes/base-request.pipe';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';

import { AclUsersDto } from 'src/dto/acl/acl.users.dto';;
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) { }

    @Get()
    @ApiResponseEntity(AclUsersDto, 'list')
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
            const safeData = result.data.map(({ password, ...rest }) => rest);

            return ApiResponseHelper.success(safeData, 'list', undefined, result.total);
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal mengambil data', 500, error);
        }
    }

    @Get(':id')
    @ApiResponseEntity(AclUsersDto, 'get')
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.service.findOne(id);
            if (!result) {
                return ApiResponseHelper.failed(null, 'Data tidak ditemukan', 404);
            }
            if (result) {
                const { password, ...safeResult } = result;
            }
            return ApiResponseHelper.success(result, 'get');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Terjadi kesalahan', 500, error);
        }
    }

    @Post()
    @ApiBody({ type: AclUsersDto })
    @ApiResponseEntity(AclUsersDto, 'post')
    async create(@Body() body: AclUsersDto) {
        try {
            const result = await this.service.create(body);
            return ApiResponseHelper.success(result, 'create');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menambahkan data', 500, error);
        }
    }

    @Put(':id')
    @ApiBody({ type: AclUsersDto })
    @ApiResponseEntity(AclUsersDto, 'put')
    async update(@Param('id') id: string, @Body() body: AclUsersDto) {
        try { 
            if (body.password === undefined || body.password === null || body.password === ''){
                delete (body as any).password;
            }
            const result = await this.service.update(id, body);
            return ApiResponseHelper.success(result, 'update');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal memperbarui data', 500, error);
        }
    }

    @Delete(':id')
    @ApiResponseEntity(AclUsersDto, 'delete')
    async remove(@Param('id') id: string) {
        try {
            const result = await this.service.remove(id);
            return ApiResponseHelper.success(result, 'delete');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menghapus data', 500, error);
        }
    }
}
