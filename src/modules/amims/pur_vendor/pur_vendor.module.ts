import { PurVendorWidgetController } from './pur_vendor_widget.controller';
import { PurVendorWidgetService } from './pur_vendor_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurVendorService } from './pur_vendor.service';
import { PurVendorController } from './pur_vendor.controller';
import { AmimsPurVendor } from 'src/entities/amims';
import { PurVendorReportController } from './pur_vendor_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurVendor],'amims')],
  controllers: [PurVendorController, PurVendorReportController, PurVendorWidgetController],
  providers: [PurVendorService, PurVendorWidgetService],
})
export class PurVendorModule {}
