import { ApiProperty } from '@nestjs/swagger';
import { PelangganPurchaseInvoiceDto } from './pelanggan.purchase_invoice.dto';
import { PelangganClientDto } from './pelanggan.client.dto';

export class PelangganPurchaseInvoiceReportDto extends PelangganPurchaseInvoiceDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;
}
