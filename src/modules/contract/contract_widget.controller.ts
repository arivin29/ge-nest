import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContractWidgetService } from './contract_widget.service';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator'; 
import { BaseWidgetQueryDto } from 'src/common/dto/base-widget-query.dto';
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
import { ContractWidgetReportDto } from './dto/contract_widget_report.dto';

@ApiTags('contract_widget')
@Controller('contract_widget')
export class ContractWidgetController {
    constructor(private readonly service: ContractWidgetService) { }

    @Get() 
    @ApiResponseEntity( ContractWidgetReportDto, 'list')
    async findAll(
        @Query() query: BaseWidgetQueryDto,
        @Body() body: BaseWidgetQueryDto
    ) {
        const isString = (val: any) => typeof val === 'string';

        const parsed: SmartQueryInputWidget = {
            where: isString(query.filter) ? JSON.parse(query.filter) : {},
            joinWhere: isString(query.joinWhere) ? JSON.parse(query.joinWhere) : {},
            order: query.sortKey
                ? { by: query.sortKey, direction: query.sortValue ?? 'asc' }
                : undefined,
            select: isString(query.select) ? JSON.parse(query.select) : undefined,
            groupBy: isString(query.groupBy) ? JSON.parse(query.groupBy) : [],
        };

        const result = await this.service.findAllWidget(parsed);
        return ApiResponseHelper.success(result.data, 'list', undefined, result.total);
    }
}