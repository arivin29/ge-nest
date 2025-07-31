import { SalesBarangWidgetController } from './sales_barang_widget.controller';
import { SalesBarangWidgetService } from './sales_barang_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesBarangService } from './sales_barang.service';
import { SalesBarangController } from './sales_barang.controller';
import { PelangganSalesBarang } from 'src/entities/pelanggan';
import { SalesBarangReportController } from './sales_barang_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganSalesBarang],'pelanggan')],
  controllers: [SalesBarangController, SalesBarangReportController, SalesBarangWidgetController],
  providers: [SalesBarangService, SalesBarangWidgetService],
})
export class SalesBarangModule {}
