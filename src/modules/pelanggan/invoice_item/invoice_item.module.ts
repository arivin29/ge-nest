import { InvoiceItemWidgetController } from './invoice_item_widget.controller';
import { InvoiceItemWidgetService } from './invoice_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItemService } from './invoice_item.service';
import { InvoiceItemController } from './invoice_item.controller';
import { PelangganInvoiceItem } from 'src/entities/pelanggan';
import { InvoiceItemReportController } from './invoice_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganInvoiceItem],'pelanggan')],
  controllers: [InvoiceItemController, InvoiceItemReportController, InvoiceItemWidgetController],
  providers: [InvoiceItemService, InvoiceItemWidgetService],
})
export class InvoiceItemModule {}
