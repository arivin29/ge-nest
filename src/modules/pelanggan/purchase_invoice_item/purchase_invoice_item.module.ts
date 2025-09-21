import { PurchaseInvoiceItemWidgetController } from './purchase_invoice_item_widget.controller';
import { PurchaseInvoiceItemWidgetService } from './purchase_invoice_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseInvoiceItemService } from './purchase_invoice_item.service';
import { PurchaseInvoiceItemController } from './purchase_invoice_item.controller';
import { PelangganPurchaseInvoiceItem } from 'src/entities/pelanggan';
import { PurchaseInvoiceItemReportController } from './purchase_invoice_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPurchaseInvoiceItem],'pelanggan')],
  controllers: [PurchaseInvoiceItemController, PurchaseInvoiceItemReportController, PurchaseInvoiceItemWidgetController],
  providers: [PurchaseInvoiceItemService, PurchaseInvoiceItemWidgetService],
})
export class PurchaseInvoiceItemModule {}
