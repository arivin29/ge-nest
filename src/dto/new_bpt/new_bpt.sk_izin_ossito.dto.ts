import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssitoDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssito: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  noSipttk: string;

  @ApiProperty({ required: true })
  noStrttk: string;

  @ApiProperty({ required: true })
  penanggungJwb: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: true })
  tglSipttk: string;

  @ApiProperty({ required: true })
  tglStrttk: string;
}
