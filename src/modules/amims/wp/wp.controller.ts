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
import { WpService } from './wp.service'; 
import { BaseRequestPipe } from 'src/common/pipes/base-request.pipe';
import { ApiResponseHelper } from 'src/common/helpers/response.helper'; 
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';
import { User } from 'src/auth/user.decorator';

import { AmimsWpDto } from 'src/dto/amims/amims.wp.dto';; 
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
 
@ApiTags('wp')
@Controller('wp')
export class WpController {
    constructor(private readonly service: WpService) { }

    @Get()
    @ApiResponseEntity(AmimsWpDto, 'list')
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
    @ApiResponseEntity(AmimsWpDto, 'get')
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
    @ApiBody({ type: AmimsWpDto }) 
    @ApiResponseEntity(AmimsWpDto, 'post')
    async create(@Body() body: AmimsWpDto, @User() user: any) {
        try {
            // 🔥 Inject id_user dari JWT kalau body.idUser null
            if (!body.idUser && user?.id_user) {
                body.idUser = user.id_user;
            }

            // 🔥 Cek apakah user punya draft yang belum selesai (validasi=0)
            if (body.idUser) {
                const existingDraft = await this.service.findOne({
                    where: {
                        idUser: body.idUser,
                        validasi: 0
                    }
                } as any);

                // Kalau ada draft, return draft tersebut supaya frontend bisa lanjutkan
                if (existingDraft) {
                    return ApiResponseHelper.success(
                        existingDraft, 
                        'get',
                        'Anda memiliki draft yang belum selesai. Silakan selesaikan draft tersebut terlebih dahulu.'
                    );
                }
            }

            const result = await this.service.create(body);
            return ApiResponseHelper.success(result, 'create');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menambahkan data', 500, error);
        }
    }

    @Put(':id')
    @ApiBody({ type: AmimsWpDto })
    @ApiResponseEntity(AmimsWpDto, 'put')
    async update(@Param('id') id: string, @Body() body: AmimsWpDto) {
        try {
            await this.service.update(id, body);
            
            // 🔥 Fetch fresh data setelah update
            const updatedWp = await this.service.findOne(id);
            
            return ApiResponseHelper.success(updatedWp, 'update');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal memperbarui data', 500, error);
        }
    }

    @Delete(':id')
    @ApiResponseEntity(AmimsWpDto, 'delete')
    async remove(@Param('id') id: string) {
        try {
            const result = await this.service.remove(id);
            return ApiResponseHelper.success(result, 'delete');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menghapus data', 500, error);
        }
    }
}
