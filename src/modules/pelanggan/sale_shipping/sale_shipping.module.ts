import { SaleShippingWidgetController } from './sale_shipping_widget.controller';
import { SaleShippingWidgetService } from './sale_shipping_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleShippingService } from './sale_shipping.service';
import { SaleShippingController } from './sale_shipping.controller';
import { PelangganSaleShipping } from 'src/entities/pelanggan';
import { SaleShippingReportController } from './sale_shipping_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganSaleShipping],'pelanggan')],
  controllers: [SaleShippingController, SaleShippingReportController, SaleShippingWidgetController],
  providers: [SaleShippingService, SaleShippingWidgetService],
})
export class SaleShippingModule {}
