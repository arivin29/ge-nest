import { ApiProperty } from '@nestjs/swagger';
import { PelangganSalesPenjualanDto } from './pelanggan.sales_penjualan.dto';

export class PelangganSalesPenjualanWidgetDto extends PelangganSalesPenjualanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
