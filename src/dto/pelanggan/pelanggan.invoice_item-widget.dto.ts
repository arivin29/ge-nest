import { ApiProperty } from '@nestjs/swagger';
import { PelangganInvoiceItemDto } from './pelanggan.invoice_item.dto';

export class PelangganInvoiceItemWidgetDto extends PelangganInvoiceItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
