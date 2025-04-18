import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Query,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { DocumentService } from './document.service'; 
import { BaseRequestPipe } from 'src/common/pipes/base-request.pipe';
import { ApiResponseHelper } from 'src/common/helpers/response.helper'; 
import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';

import { DocumentDocumentDto } from 'src/dto/document/document.document.dto';; 
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
import { FileInterceptor } from '@nestjs/platform-express';
import path from 'path';
import * as fs from 'fs';
import { Response } from 'express';


@ApiTags('document')
@Controller('document')
export class DocumentController {
    constructor(private readonly service: DocumentService) { }

    @Get()
    @ApiResponseEntity(DocumentDocumentDto, 'list')
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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Upload dokumen dengan metadata',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                idDocument: { type: 'string' },
                name: { type: 'string' },
                nomor: { type: 'string' },
                tanggal: { type: 'string', format: 'date' },
                forModule: { type: 'string' },
                forModuleId: { type: 'string' },
                fileExt: { type: 'string' },
                fileName: { type: 'string' },
                fileLocation: { type: 'string' },
                enableDownload: { type: 'string' },
                idUser: { type: 'integer' },
            },
            required: ['file'], // Hapus 'idDocument'
        },
    })
    async uploadFile(
        @UploadedFile() file: Express.Multer.File, // ✅ ini fix-nya
        @Body() body: Partial<DocumentDocumentDto>
    ) {
        return this.service.uploadDocument(file, body);
    }

    @Get(':id')
    @ApiResponseEntity(DocumentDocumentDto, 'get')
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
    @ApiBody({ type: DocumentDocumentDto }) 
    @ApiResponseEntity(DocumentDocumentDto, 'post')
    async create(@Body() body: DocumentDocumentDto) {
        try {
            const result = await this.service.create(body);
            return ApiResponseHelper.success(result, 'create');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menambahkan data', 500, error);
        }
    }

    @Put(':id')
    @ApiBody({ type: DocumentDocumentDto })
    @ApiResponseEntity(DocumentDocumentDto, 'put')
    async update(@Param('id') id: string, @Body() body: DocumentDocumentDto) {
        try {
            const result = await this.service.update(id, body);
            return ApiResponseHelper.success(result, 'update');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal memperbarui data', 500, error);
        }
    }

    @Delete(':id')
    @ApiResponseEntity(DocumentDocumentDto, 'delete')
    async remove(@Param('id') id: string) {
        try {
            const result = await this.service.remove(id);
            return ApiResponseHelper.success(result, 'delete');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menghapus data', 500, error);
        }
    }
}
