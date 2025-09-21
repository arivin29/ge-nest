import { ApiProperty } from '@nestjs/swagger';
import { PelangganPurchaseInvoiceItemDto } from './pelanggan.purchase_invoice_item.dto';

export class PelangganPurchaseInvoiceItemWidgetDto extends PelangganPurchaseInvoiceItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
