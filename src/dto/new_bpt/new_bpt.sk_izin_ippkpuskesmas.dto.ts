import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIppkpuskesmasDto {
  @ApiProperty({ required: true })
  akta: string;

  @ApiProperty({ required: true })
  aktaPendirian: string;

  @ApiProperty({ required: true })
  bap: string;

  @ApiProperty({ required: true })
  bapIoTgl: string;

  @ApiProperty({ required: true })
  bapLapanganTgl: string;

  @ApiProperty({ required: true })
  bapl: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIppkpuskesmas: number; // PK

  @ApiProperty({ required: true })
  io: string;

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  klasifikasiKlinik: string;

  @ApiProperty({ required: true })
  klasifikasiWilayahKerja: string;

  @ApiProperty({ required: true })
  klinik: string;

  @ApiProperty({ required: true })
  namaApoteker: string;

  @ApiProperty({ required: true })
  namaDA: string;

  @ApiProperty({ required: true })
  namaDB: string;

  @ApiProperty({ required: true })
  namakes: string;

  @ApiProperty({ required: true })
  noSuratImk: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  nomorApoteker: string;

  @ApiProperty({ required: true })
  nomorDA: string;

  @ApiProperty({ required: true })
  nomorDB: string;

  @ApiProperty({ required: true })
  nomorImk: string;

  @ApiProperty({ required: true })
  nomorSurat: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  puskesmas: string;

  @ApiProperty({ required: true })
  rekom: string;

  @ApiProperty({ required: true })
  rekomIzinNo: string;

  @ApiProperty({ required: true })
  rekomIzinTgl: string;

  @ApiProperty({ required: true })
  sewa: string;

  @ApiProperty({ required: true })
  sewaMenyewa: string;

  @ApiProperty({ required: true })
  sewaMenyewa2: string;

  @ApiProperty({ required: true })
  tglRekom: string;

  @ApiProperty({ required: true })
  tglSurat: string;
}
