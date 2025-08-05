import { ApiProperty } from '@nestjs/swagger';
import { PelangganInvoiceDto } from './pelanggan.invoice.dto';
import { PelangganClientDto } from './pelanggan.client.dto';

export class PelangganInvoiceReportDto extends PelangganInvoiceDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;
}
