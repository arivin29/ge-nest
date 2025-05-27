import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranHistoryDto } from './pelanggan.penawaran_history.dto';
import { PelangganPenawaranDto } from './pelanggan.penawaran.dto';

export class PelangganPenawaranHistoryReportDto extends PelangganPenawaranHistoryDto {
  @ApiProperty({ type: PelangganPenawaranDto })
  penawaran: PelangganPenawaranDto;
}
