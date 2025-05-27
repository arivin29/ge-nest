import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranTagDto } from './pelanggan.penawaran_tag.dto';
import { PelangganPenawaranDto } from './pelanggan.penawaran.dto';

export class PelangganPenawaranTagReportDto extends PelangganPenawaranTagDto {
  @ApiProperty({ type: PelangganPenawaranDto })
  penawaran: PelangganPenawaranDto;
}
