import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinDto {
  @ApiProperty({ required: false })
  @IsOptional()
  barcode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  denda: number;

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
  idKec: string;

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
  idUserArsip: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserBo: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserDintek: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserKabid: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserKadin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserPenerbitan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserPenyerahan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserPetugas: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserSekdis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserVerifikasi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  induak: number;

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lokasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasTanah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noIzin: string;

  @ApiProperty({ required: false })
  @IsOptional()
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

  @ApiProperty({ required: false })
  @IsOptional()
  noUrutResi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorResiPos: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nop: string;

  @ApiProperty({ required: false })
  @IsOptional()
  permasalahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  peruntukan: string;

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
  tglArsip: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglDenda: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglDendaDibayar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglFoAcc: string;

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
  tglRapat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRestribusi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRetribusiDiambil: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRetribusiDibayar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRetribusiDikembalikan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSekdis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkDiambil: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSurvey: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglTerbit: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglVerifikasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tinggiBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
