import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranDto } from './pelanggan.penawaran.dto';

export class PelangganPenawaranWidgetDto extends PelangganPenawaranDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
