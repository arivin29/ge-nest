import { SalesPenjualanItemWidgetController } from './sales_penjualan_item_widget.controller';
import { SalesPenjualanItemWidgetService } from './sales_penjualan_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesPenjualanItemService } from './sales_penjualan_item.service';
import { SalesPenjualanItemController } from './sales_penjualan_item.controller';
import { PelangganSalesPenjualanItem } from 'src/entities/pelanggan';
import { SalesPenjualanItemReportController } from './sales_penjualan_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganSalesPenjualanItem],'pelanggan')],
  controllers: [SalesPenjualanItemController, SalesPenjualanItemReportController, SalesPenjualanItemWidgetController],
  providers: [SalesPenjualanItemService, SalesPenjualanItemWidgetService],
})
export class SalesPenjualanItemModule {}
