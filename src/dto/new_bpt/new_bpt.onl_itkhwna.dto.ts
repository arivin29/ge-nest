import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlItkhwnaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlItkhwna: number; // PK

  @ApiProperty({ required: true })
  namaFaskes: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: true })
  praktekKe: boolean;

  @ApiProperty({ required: true })
  tglRekom: string;

  @ApiProperty({ required: true })
  tglStr: string;
}
