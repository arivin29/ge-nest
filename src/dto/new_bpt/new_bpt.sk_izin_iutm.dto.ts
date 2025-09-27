import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIutmDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIutm: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  jenisIutm: string;

  @ApiProperty({ required: true })
  luasRuangUsaha: string;

  @ApiProperty({ required: true })
  namaImb: string;

  @ApiProperty({ required: true })
  nomorImbg: string;

  @ApiProperty({ required: true })
  nomorSkHo: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  peruntukanImb: string;

  @ApiProperty({ required: true })
  rekom: string;

  @ApiProperty({ required: true })
  sewa: string;
}
