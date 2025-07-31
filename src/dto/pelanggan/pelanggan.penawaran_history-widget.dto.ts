import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranHistoryDto } from './pelanggan.penawaran_history.dto';

export class PelangganPenawaranHistoryWidgetDto extends PelangganPenawaranHistoryDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
