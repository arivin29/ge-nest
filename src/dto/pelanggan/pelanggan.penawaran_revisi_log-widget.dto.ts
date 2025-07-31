import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranRevisiLogDto } from './pelanggan.penawaran_revisi_log.dto';

export class PelangganPenawaranRevisiLogWidgetDto extends PelangganPenawaranRevisiLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
