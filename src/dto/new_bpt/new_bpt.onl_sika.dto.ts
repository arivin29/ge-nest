import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSikaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSika: number; // PK

  @ApiProperty({ required: true })
  masaBerlakuStra: string;

  @ApiProperty({ required: true })
  namaFaskes: string;

  @ApiProperty({ required: true })
  noStra: string;

  @ApiProperty({ required: true })
  praktekKe: number;

  @ApiProperty({ required: true })
  untukPraktik: string;
}
