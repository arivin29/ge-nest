import { ApiProperty } from '@nestjs/swagger';
import { PelangganFakturDto } from './pelanggan.faktur.dto';
import { PelangganInvoiceDto } from './pelanggan.invoice.dto';

export class PelangganFakturReportDto extends PelangganFakturDto {
  @ApiProperty({ type: PelangganInvoiceDto })
  invoice: PelangganInvoiceDto;
}
