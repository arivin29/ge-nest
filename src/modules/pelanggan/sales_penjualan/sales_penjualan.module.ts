import { SalesPenjualanWidgetController } from './sales_penjualan_widget.controller';
import { SalesPenjualanWidgetService } from './sales_penjualan_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesPenjualanService } from './sales_penjualan.service';
import { SalesPenjualanController } from './sales_penjualan.controller';
import { PelangganSalesPenjualan } from 'src/entities/pelanggan';
import { SalesPenjualanReportController } from './sales_penjualan_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganSalesPenjualan],'pelanggan')],
  controllers: [SalesPenjualanController, SalesPenjualanReportController, SalesPenjualanWidgetController],
  providers: [SalesPenjualanService, SalesPenjualanWidgetService],
})
export class SalesPenjualanModule {}
