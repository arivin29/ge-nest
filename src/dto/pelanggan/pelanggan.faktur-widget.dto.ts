import { ApiProperty } from '@nestjs/swagger';
import { PelangganFakturDto } from './pelanggan.faktur.dto';

export class PelangganFakturWidgetDto extends PelangganFakturDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
