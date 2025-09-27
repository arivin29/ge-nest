import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinItptkiDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinItptki: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  jk: number;

  @ApiProperty({ required: true })
  kapasitasTki: string;

  @ApiProperty({ required: true })
  noTki: string;

  @ApiProperty({ required: true })
  nomorSurat: string;

  @ApiProperty({ required: true })
  pentasker: string;

  @ApiProperty({ required: true })
  tglReg: string;

  @ApiProperty({ required: true })
  tglSrt: string;

  @ApiProperty({ required: true })
  tglTki: string;
}
