import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTpprDto {
  @ApiProperty({ required: true })
  campur: string;

  @ApiProperty({ required: true })
  daftarUlang: string;

  @ApiProperty({ required: true })
  dewasa: string;

  @ApiProperty({ required: true })
  hasilSurveyLapangan: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTppr: number; // PK

  @ApiProperty({ required: true })
  jenisTernak: string;

  @ApiProperty({ required: true })
  jmlTernak: string;

  @ApiProperty({ required: true })
  jumlahModal: string;

  @ApiProperty({ required: true })
  jumlahProduksi: string;

  @ApiProperty({ required: true })
  luasKandang: string;

  @ApiProperty({ required: true })
  luasLahan: string;

  @ApiProperty({ required: true })
  macamProduksi: string;

  @ApiProperty({ required: true })
  milikKandang: string;

  @ApiProperty({ required: true })
  milikLahan: string;

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  straint: string;

  @ApiProperty({ required: true })
  tgl: string;
}
