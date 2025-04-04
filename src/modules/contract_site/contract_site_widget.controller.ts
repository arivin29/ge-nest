import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContractSiteWidgetService } from './contract_site_widget.service';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';
import { AutoSwaggerQuery } from 'src/common/decorators/auto-swagger-query.decorator';
import { BaseWidgetQueryDto } from 'src/common/dto/base-widget-query.dto';
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity';
import { ContractSiteWidgetReportDto } from './dto/contract_site_widget_report.dto';

@ApiTags('contract_site_widget')
@Controller('contract_site_widget')
export class ContractSiteWidgetController {
    constructor(private readonly service: ContractSiteWidgetService) { }

    @Get()
    // @AutoSwaggerQuery()
    @ApiResponseEntity(ContractSiteWidgetReportDto, 'list')
    async findAll(
        @Query() query: BaseWidgetQueryDto,
        @Body() body: BaseWidgetQueryDto
    ) {
        type InputUnion = BaseWidgetQueryDto | SmartQueryInputWidget;

        const isQueryMode = query.filter !== undefined || query.joinWhere !== undefined;
        const source: InputUnion = isQueryMode ? query : body;

        const isString = (val: any) => typeof val === 'string';

        const parsed: SmartQueryInputWidget = {
            where: isString((source as any).filter)
                ? JSON.parse((source as any).filter)
                : (source as any).where ?? (source as any).filter ?? {},

            joinWhere: isString((source as any).joinWhere)
                ? JSON.parse((source as any).joinWhere)
                : (source as any).joinWhere ?? {},

            order: (source as any).sortKey
                ? {
                    by: (source as any).sortKey,
                    direction: ((source as any).sortValue ?? 'asc').toUpperCase() as 'ASC' | 'DESC',
                }
                : (source as any).order,

            select: isString((source as any).select)
                ? JSON.parse((source as any).select)
                : (source as any).select,

            groupBy: isString((source as any).groupBy)
                ? JSON.parse((source as any).groupBy)
                : (source as any).groupBy ?? [], 
        };
        console.log('[PARAMS] parsed', parsed)
        const result = await this.service.findAllWidget(parsed);
        return ApiResponseHelper.success(result.data, 'list', undefined, result.total);
    }
}