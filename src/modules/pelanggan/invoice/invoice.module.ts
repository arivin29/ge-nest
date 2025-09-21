import { InvoiceWidgetController } from './invoice_widget.controller';
import { InvoiceWidgetService } from './invoice_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { PelangganInvoice } from 'src/entities/pelanggan';
import { InvoiceReportController } from './invoice_report.controller';
import { RedisPublishHelperPenormoran } from 'src/common/redis/penomoram/redis-publish.helper';
import { DocumentNumberingModule } from 'src/modules/tools/document_numbering/document_numbering.module';
 
@Module({
    imports: [TypeOrmModule.forFeature([PelangganInvoice], 'pelanggan'), DocumentNumberingModule],
  controllers: [InvoiceController, InvoiceReportController, InvoiceWidgetController],
    providers: [InvoiceService, InvoiceWidgetService, RedisPublishHelperPenormoran],
})
export class InvoiceModule {}
