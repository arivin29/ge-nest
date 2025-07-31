import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranTagDto } from './pelanggan.penawaran_tag.dto';

export class PelangganPenawaranTagWidgetDto extends PelangganPenawaranTagDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
