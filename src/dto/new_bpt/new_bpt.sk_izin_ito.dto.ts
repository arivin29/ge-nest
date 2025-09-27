import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinItoDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIto: number; // PK

  @ApiProperty({ required: true })
  jenisKelamin: boolean;

  @ApiProperty({ required: true })
  keputusan: string;

  @ApiProperty({ required: true })
  lahan: string;

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaTo: string;

  @ApiProperty({ required: true })
  noLapangan: string;

  @ApiProperty({ required: true })
  noPembahasan: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  nomorSipttk: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tglLapangan: string;

  @ApiProperty({ required: true })
  tglPembahasan: string;

  @ApiProperty({ required: true })
  tglRekom: string;

  @ApiProperty({ required: true })
  tglSipttk: string;

  @ApiProperty({ required: true })
  tglSurat: string;
}
