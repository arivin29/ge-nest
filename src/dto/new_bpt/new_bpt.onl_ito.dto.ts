import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlItoDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIto: number; // PK

  @ApiProperty({ required: true })
  lahan: string;

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  nomorSipttk: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tglSipttk: string;
}
