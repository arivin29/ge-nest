import { ApiProperty } from '@nestjs/swagger';
import { PelangganTeknisiDto } from './pelanggan.teknisi.dto';

export class PelangganTeknisiWidgetDto extends PelangganTeknisiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
