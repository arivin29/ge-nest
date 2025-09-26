import { ApiProperty } from '@nestjs/swagger';
import { PelangganSaleInvoiceItemDto } from './pelanggan.sale_invoice_item.dto';

export class PelangganSaleInvoiceItemWidgetDto extends PelangganSaleInvoiceItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
