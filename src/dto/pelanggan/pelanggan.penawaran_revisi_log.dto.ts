import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPenawaranRevisiLogDto {
  @ApiProperty({ required: false })
  alasanRevisi: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  idPenawaranAsal: string;

  @ApiProperty({ required: true })
  idPenawaranRevisi: string;

  @ApiProperty({ required: true })
  idRevisi: string;
}
