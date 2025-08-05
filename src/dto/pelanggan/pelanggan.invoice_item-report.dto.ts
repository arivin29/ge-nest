import { ApiProperty } from '@nestjs/swagger';
import { PelangganInvoiceItemDto } from './pelanggan.invoice_item.dto';
import { PelangganInvoiceDto } from './pelanggan.invoice.dto';

export class PelangganInvoiceItemReportDto extends PelangganInvoiceItemDto {
  @ApiProperty({ type: PelangganInvoiceDto })
  invoice: PelangganInvoiceDto;
}
