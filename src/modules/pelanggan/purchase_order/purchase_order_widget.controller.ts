import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PurchaseOrderWidgetService } from './purchase_order_widget.service';
import { ApiResponseHelper } from 'src/common/helpers/response.helper';  
import { BaseWidgetQueryDto } from 'src/common/dto/base-widget-query.dto';
import { SmartQueryInputWidget } from 'src/common/helpers/smart-query-input-widget';
import { ApiResponseEntity } from 'src/common/decorators/api-response-entity'; 
import { PelangganPurchaseOrderWidgetDto } from 'src/dto/pelanggan/pelanggan.purchase_order-widget.dto';

@ApiTags('purchase_order_widget')
@Controller('purchase_order_widget')
export class PurchaseOrderWidgetController {
    constructor(private readonly service: PurchaseOrderWidgetService) { }

    @Post() 
    @ApiResponseEntity( PelangganPurchaseOrderWidgetDto, 'list')
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