import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPenawaranHistoryDto {
  @ApiProperty({ required: true })
  action: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: true })
  idPenawaran: string;

  @ApiProperty({ required: true })
  idPenawaranHistory: string;

  @ApiProperty({ required: false })
  keterangan: string;
}
