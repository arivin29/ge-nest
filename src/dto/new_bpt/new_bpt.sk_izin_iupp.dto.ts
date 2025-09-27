import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIuppDto {
  @ApiProperty({ required: true })
  ho: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIupp: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  luasRuangUsaha: string;

  @ApiProperty({ required: true })
  peruntukan: string;

  @ApiProperty({ required: true })
  rekomperindag: string;

  @ApiProperty({ required: true })
  sewa: string;

  @ApiProperty({ required: true })
  statusTempat: string;
}
