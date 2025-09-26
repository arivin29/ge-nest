import { ApiProperty } from '@nestjs/swagger';
import { PelangganPurchaseInvoiceDto } from './pelanggan.purchase_invoice.dto';

export class PelangganPurchaseInvoiceWidgetDto extends PelangganPurchaseInvoiceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
