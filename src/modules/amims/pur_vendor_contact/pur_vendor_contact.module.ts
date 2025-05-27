import { PurVendorContactWidgetController } from './pur_vendor_contact_widget.controller';
import { PurVendorContactWidgetService } from './pur_vendor_contact_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurVendorContactService } from './pur_vendor_contact.service';
import { PurVendorContactController } from './pur_vendor_contact.controller';
import { AmimsPurVendorContact } from 'src/entities/amims';
import { PurVendorContactReportController } from './pur_vendor_contact_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurVendorContact],'amims')],
  controllers: [PurVendorContactController, PurVendorContactReportController, PurVendorContactWidgetController],
  providers: [PurVendorContactService, PurVendorContactWidgetService],
})
export class PurVendorContactModule {}
