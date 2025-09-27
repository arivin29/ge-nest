import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinDeletedDto {
  @ApiProperty({ required: true })
  barcode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  denda: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzin: number; // PK

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true })
  idIzinPosisi: number;

  @ApiProperty({ required: true })
  idIzinTipe: number;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true })
  idKel: string;

  @ApiProperty({ required: true })
  idKuasa: number;

  @ApiProperty({ required: true })
  idPemohon: number;

  @ApiProperty({ required: true })
  idPemohonHubungan: number;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  idUserBo: number;

  @ApiProperty({ required: true })
  induak: number;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  luasBangunan: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  noIzin: string;

  @ApiProperty({ required: true })
  noResi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkrd: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkrdDenda: string;

  @ApiProperty({ required: true })
  noUrut: number;

  @ApiProperty({ required: true })
  noUrutResi: number;

  @ApiProperty({ required: true })
  permasalahan: string;

  @ApiProperty({ required: true })
  peruntukan: string;

  @ApiProperty({ required: true })
  retribusi: number;

  @ApiProperty({ required: true })
  selesai: string;

  @ApiProperty({ required: true })
  sourcer: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: true })
  statusPermohonan: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tglAmbil: string;

  @ApiProperty({ required: true })
  tglArsip: string;

  @ApiProperty({ required: true })
  tglDenda: string;

  @ApiProperty({ required: true })
  tglDendaDibayar: string;

  @ApiProperty({ required: true })
  tglInput: string;

  @ApiProperty({ required: true })
  tglKbd: string;

  @ApiProperty({ required: true })
  tglKsb: string;

  @ApiProperty({ required: true })
  tglProses: string;

  @ApiProperty({ required: true })
  tglRestribusi: string;

  @ApiProperty({ required: true })
  tglRetribusiDibayar: string;

  @ApiProperty({ required: true })
  tglSk: string;

  @ApiProperty({ required: true })
  tglSkDiambil: string;

  @ApiProperty({ required: true })
  tglTerbit: string;

  @ApiProperty({ required: true })
  tglVerifikasi: string;

  @ApiProperty({ required: true })
  tinggiBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
