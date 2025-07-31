import { ApiProperty } from '@nestjs/swagger';
import { PelangganSaleShippingDto } from './pelanggan.sale_shipping.dto';

export class PelangganSaleShippingWidgetDto extends PelangganSaleShippingDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
