import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MaintenanceProgramItemWidgetService } from './maintenance_program_item_widget.service';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';  
import { BaseWidgetQueryDto } from 'src/common/dto/base-widget-query.dto';
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity'; 
import { AmimsMaintenanceProgramItemWidgetDto } from 'src/dto/amims/amims.maintenance_program_item-widget.dto';

@ApiTags('maintenance_program_item_widget')
@Controller('maintenance_program_item_widget')
export class MaintenanceProgramItemWidgetController {
    constructor(private readonly service: MaintenanceProgramItemWidgetService) { }

    @Post() 
    @ApiResponseEntity( AmimsMaintenanceProgramItemWidgetDto, 'list')
    async findAll(
        @Query() query: BaseWidgetQueryDto,
        @Body() body: BaseWidgetQueryDto
    ) {
        const parsed: SmartQueryInputWidget = {
            where: body.filter ?? {},
            joinWhere: body.joinWhere ?? {},
            order: body.sortKey
                ? { by: body.sortKey, direction: body.sortValue ?? 'asc' }
                : undefined,
            select: body.select,
            groupBy: body.groupBy ?? [],
        };

        const result = await this.service.findAllWidget(parsed);
        return ApiResponseHelper.success(result.data, 'list', undefined, result.total);
    }
}