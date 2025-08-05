import { ApiProperty } from '@nestjs/swagger';
import { PelangganPurchaseOrderDto } from './pelanggan.purchase_order.dto';

export class PelangganPurchaseOrderWidgetDto extends PelangganPurchaseOrderDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
