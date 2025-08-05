import { ApiProperty } from '@nestjs/swagger';
import { PelangganSalesBarangDto } from './pelanggan.sales_barang.dto';

export class PelangganSalesBarangWidgetDto extends PelangganSalesBarangDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
