import { ApiProperty } from '@nestjs/swagger';
import { PelangganSalesPenjualanItemDto } from './pelanggan.sales_penjualan_item.dto';

export class PelangganSalesPenjualanItemWidgetDto extends PelangganSalesPenjualanItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
