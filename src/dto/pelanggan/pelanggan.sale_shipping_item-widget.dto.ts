import { ApiProperty } from '@nestjs/swagger';
import { PelangganSaleShippingItemDto } from './pelanggan.sale_shipping_item.dto';

export class PelangganSaleShippingItemWidgetDto extends PelangganSaleShippingItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
