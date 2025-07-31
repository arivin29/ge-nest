import { SaleShippingItemWidgetController } from './sale_shipping_item_widget.controller';
import { SaleShippingItemWidgetService } from './sale_shipping_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleShippingItemService } from './sale_shipping_item.service';
import { SaleShippingItemController } from './sale_shipping_item.controller';
import { PelangganSaleShippingItem } from 'src/entities/pelanggan';
import { SaleShippingItemReportController } from './sale_shipping_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganSaleShippingItem],'pelanggan')],
  controllers: [SaleShippingItemController, SaleShippingItemReportController, SaleShippingItemWidgetController],
  providers: [SaleShippingItemService, SaleShippingItemWidgetService],
})
export class SaleShippingItemModule {}
