import { PurVendorItemWidgetController } from './pur_vendor_item_widget.controller';
import { PurVendorItemWidgetService } from './pur_vendor_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurVendorItemService } from './pur_vendor_item.service';
import { PurVendorItemController } from './pur_vendor_item.controller';
import { AmimsPurVendorItem } from 'src/entities/amims';
import { PurVendorItemReportController } from './pur_vendor_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurVendorItem],'amims')],
  controllers: [PurVendorItemController, PurVendorItemReportController, PurVendorItemWidgetController],
  providers: [PurVendorItemService, PurVendorItemWidgetService],
})
export class PurVendorItemModule {}
