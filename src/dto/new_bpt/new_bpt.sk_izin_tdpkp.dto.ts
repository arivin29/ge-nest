import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTdpkpDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTdpkp: number; // PK

  @ApiProperty({ required: true })
  jk: number;

  @ApiProperty({ required: true })
  noTeknis: string;

  @ApiProperty({ required: true })
  pelatihan: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tglReg: string;

  @ApiProperty({ required: true })
  tglTeknis: string;
}
