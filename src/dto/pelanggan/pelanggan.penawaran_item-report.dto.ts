import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranItemDto } from './pelanggan.penawaran_item.dto';
import { PelangganPenawaranDto } from './pelanggan.penawaran.dto';
import { PelangganServiceDto } from './pelanggan.service.dto';

export class PelangganPenawaranItemReportDto extends PelangganPenawaranItemDto {
  @ApiProperty({ type: PelangganPenawaranDto })
  penawaran: PelangganPenawaranDto;

  @ApiProperty({ type: PelangganServiceDto })
  service: PelangganServiceDto;
}
