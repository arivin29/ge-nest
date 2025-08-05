import { ApiProperty } from '@nestjs/swagger';
import { PelangganPurchaseOrderItemDto } from './pelanggan.purchase_order_item.dto';

export class PelangganPurchaseOrderItemWidgetDto extends PelangganPurchaseOrderItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
