import { ApiProperty } from '@nestjs/swagger';
import { PelangganSaleInvoiceItemDto } from './pelanggan.sale_invoice_item.dto';
import { PelangganInvoiceDto } from './pelanggan.invoice.dto';

export class PelangganSaleInvoiceItemReportDto extends PelangganSaleInvoiceItemDto {
  @ApiProperty({ type: PelangganInvoiceDto })
  invoice: PelangganInvoiceDto;
}
