import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptViewIzinDto {
  @ApiProperty({ required: false })
  @IsOptional()
  barcode: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzin: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinPosisi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinTipe: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idKel: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKuasa: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idPemohon: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idPemohonHubungan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idPerusahaan: number;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  induak: number;

  @ApiProperty({ required: false })
  @IsOptional()
  jenis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lokasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noIzin: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noResi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSk: string;

  @ApiProperty({ required: true })
  noUrut: number;

  @ApiProperty({ required: false })
  @IsOptional()
  noUrutResi: number;

  @ApiProperty({ required: true })
  pemohon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  permasalahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  peruntukan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perusahaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  retribusi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  selesai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sourcer: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusPermohonan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglAmbil: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglInput: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglKbd: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglKsb: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglProses: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRestribusi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSk: string;

  @ApiProperty({ required: true })
  tipe: string;
}
