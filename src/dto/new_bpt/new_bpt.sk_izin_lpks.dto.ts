import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinLpksDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinLpks: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  inputno5: string;

  @ApiProperty({ required: true })
  jenisIzin: string;

  @ApiProperty({ required: true })
  jenisProgram: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jk: string;

  @ApiProperty({ required: true })
  kajian: string;

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  namaLpks: string;

  @ApiProperty({ required: true })
  noLkps: string;

  @ApiProperty({ required: true })
  nomorSurat: string;

  @ApiProperty({ required: true })
  sewa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglLkps: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglReg: string;
}
