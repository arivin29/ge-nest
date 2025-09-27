import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinImtaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true })
  idPemohon: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinImta: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  jk: string;

  @ApiProperty({ required: true })
  kewarganegaraan: string;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  nomorPermohonan: string;

  @ApiProperty({ required: true })
  perpanjanganKe: string;

  @ApiProperty({ required: true })
  tglPermohonan: string;

  @ApiProperty({ required: true })
  tglReg: string;
}
