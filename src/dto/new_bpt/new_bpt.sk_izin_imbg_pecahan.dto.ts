import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinImbgPecahanDto {
  @ApiProperty({ required: true })
  bertindak: string;

  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  carport: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true })
  idKel: string;

  @ApiProperty({ required: true })
  idOnlImbgPc: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinImbgPecahan: number; // PK

  @ApiProperty({ required: true })
  luasBg: string;

  @ApiProperty({ required: true })
  luasBgInduk: string;

  @ApiProperty({ required: true })
  luasPb: string;

  @ApiProperty({ required: true })
  memperhatikan_1: string;

  @ApiProperty({ required: true })
  memperhatikan_2: string;

  @ApiProperty({ required: true })
  no: string;

  @ApiProperty({ required: true })
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkPc: string;

  @ApiProperty({ required: true })
  pagar: string;

  @ApiProperty({ required: true })
  septictank: string;

  @ApiProperty({ required: true })
  teras: string;

  @ApiProperty({ required: true })
  tglSkLama: string;

  @ApiProperty({ required: true })
  tipe: string;

  @ApiProperty({ required: true })
  ttd: boolean;
}
