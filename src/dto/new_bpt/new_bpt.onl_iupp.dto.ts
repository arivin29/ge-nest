import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIuppDto {
  @ApiProperty({ required: true })
  ho: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIupp: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  luasRuangUsaha: string;

  @ApiProperty({ required: true })
  rekomperindag: string;

  @ApiProperty({ required: true })
  statusTempat: string;
}
