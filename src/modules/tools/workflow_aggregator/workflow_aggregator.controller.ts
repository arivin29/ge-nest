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
import { ConfirmWorkflowDto, WorkflowAggregatorService } from './workflow_aggregator.service'; 
import { BaseRequestPipe } from 'src/common/pipes/base-request.pipe';
import { ApiResponseHelper } from 'src/common/helpers/response.helper'; 
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseQueryDto } from 'src/common/dto/base-query.dto';

import { ToolsWorkflowAggregatorDto } from 'src/dto/tools/tools.workflow_aggregator.dto';; 
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
 
@ApiTags('workflow_aggregator')
@Controller('workflow_aggregator')
export class WorkflowAggregatorController {
    constructor(private readonly service: WorkflowAggregatorService) { }

    @Get()
    @ApiResponseEntity(ToolsWorkflowAggregatorDto, 'list')
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
    @ApiResponseEntity(ToolsWorkflowAggregatorDto, 'get')
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
    @ApiBody({ type: ToolsWorkflowAggregatorDto }) 
    @ApiResponseEntity(ToolsWorkflowAggregatorDto, 'post')
    async create(@Body() body: ConfirmWorkflowDto, @CurrentUser() user: any) {
        try {
            const result = await this.service.confirmWorkflow({...body, user_id : user.id_users});
            return ApiResponseHelper.success(result, 'create');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menambahkan data', 500, error);
        }
    }

    @Put(':id')
    @ApiBody({ type: ToolsWorkflowAggregatorDto })
    @ApiResponseEntity(ToolsWorkflowAggregatorDto, 'put')
    async update(@Param('id') id: string, @Body() body: ToolsWorkflowAggregatorDto) {
        try {
            const result = await this.service.update(id, body);
            return ApiResponseHelper.success(result, 'update');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal memperbarui data', 500, error);
        }
    }

    @Delete(':id')
    @ApiResponseEntity(ToolsWorkflowAggregatorDto, 'delete')
    async remove(@Param('id') id: string) {
        try {
            const result = await this.service.remove(id);
            return ApiResponseHelper.success(result, 'delete');
        } catch (error) {
            return ApiResponseHelper.failed(null, 'Gagal menghapus data', 500, error);
        }
    }
}
