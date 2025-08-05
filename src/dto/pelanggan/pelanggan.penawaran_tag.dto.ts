import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPenawaranTagDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  idPenawaran: string;

  @ApiProperty({ required: true })
  idPenawaranTag: string;

  @ApiProperty({ required: true })
  tag: string;
}
