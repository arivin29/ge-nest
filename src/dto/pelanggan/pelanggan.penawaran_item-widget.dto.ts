import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranItemDto } from './pelanggan.penawaran_item.dto';

export class PelangganPenawaranItemWidgetDto extends PelangganPenawaranItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
