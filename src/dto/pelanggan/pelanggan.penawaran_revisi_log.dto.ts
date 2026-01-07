import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPenawaranRevisiLogDto {
  @ApiProperty({ required: true })
  idRevisi: string;

  @ApiProperty({ required: true })
  idPenawaranAsal: string;

  @ApiProperty({ required: true })
  idPenawaranRevisi: string;

  @ApiProperty({ required: false })
  alasanRevisi: string;

  @ApiProperty({ required: false })
  createdAt: string;
}
