import { ShippingWidgetController } from './shipping_widget.controller';
import { ShippingWidgetService } from './shipping_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingService } from './shipping.service';
import { ShippingController } from './shipping.controller';
import { AmimsShipping } from 'src/entities/amims';
import { ShippingReportController } from './shipping_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsShipping],'amims')],
  controllers: [ShippingController, ShippingReportController, ShippingWidgetController],
  providers: [ShippingService, ShippingWidgetService],
})
export class ShippingModule {}
