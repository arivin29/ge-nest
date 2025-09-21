import { PurchaseInvoiceWidgetController } from './purchase_invoice_widget.controller';
import { PurchaseInvoiceWidgetService } from './purchase_invoice_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseInvoiceService } from './purchase_invoice.service';
import { PurchaseInvoiceController } from './purchase_invoice.controller';
import { PelangganPurchaseInvoice } from 'src/entities/pelanggan';
import { PurchaseInvoiceReportController } from './purchase_invoice_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPurchaseInvoice],'pelanggan')],
  controllers: [PurchaseInvoiceController, PurchaseInvoiceReportController, PurchaseInvoiceWidgetController],
  providers: [PurchaseInvoiceService, PurchaseInvoiceWidgetService],
})
export class PurchaseInvoiceModule {}
