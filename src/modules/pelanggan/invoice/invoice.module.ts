import { InvoiceWidgetController } from './invoice_widget.controller';
import { InvoiceWidgetService } from './invoice_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { PelangganInvoice } from 'src/entities/pelanggan';
import { InvoiceReportController } from './invoice_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganInvoice],'pelanggan')],
  controllers: [InvoiceController, InvoiceReportController, InvoiceWidgetController],
  providers: [InvoiceService, InvoiceWidgetService],
})
export class InvoiceModule {}
