import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpblknDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpblkn: number; // PK

  @ApiProperty({ required: true })
  jenisIzin: string;

  @ApiProperty({ required: true })
  nomorSurat: string;

  @ApiProperty({ required: true })
  perhatikan: string;

  @ApiProperty({ required: true })
  tglReg: string;

  @ApiProperty({ required: true })
  tglSrt: string;
}
