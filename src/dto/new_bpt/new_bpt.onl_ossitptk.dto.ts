import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssitptkDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssitptk: number; // PK

  @ApiProperty({ required: true })
  kapasitasTki: string;

  @ApiProperty({ required: true })
  noTki: string;

  @ApiProperty({ required: true })
  tglTki: string;
}
