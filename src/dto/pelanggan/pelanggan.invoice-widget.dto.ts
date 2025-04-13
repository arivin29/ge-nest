import { ApiProperty } from '@nestjs/swagger';
import { PelangganInvoiceDto } from './pelanggan.invoice.dto';

export class PelangganInvoiceWidgetDto extends PelangganInvoiceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
