import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIutdDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIutd: number; // PK

  @ApiProperty({ required: true })
  klasifikasi: string;

  @ApiProperty({ required: true })
  noDinkes: string;

  @ApiProperty({ required: true })
  noDinprov: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  pemilik: string;

  @ApiProperty({ required: true })
  penanggung: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglDinkes: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglDinprov: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglReg: string;
}
