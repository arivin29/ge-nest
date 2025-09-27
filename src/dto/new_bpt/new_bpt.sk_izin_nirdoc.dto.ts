import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirdocDto {
  @ApiProperty({ required: true })
  akta: string;

  @ApiProperty({ required: true })
  Angka_Pengenal: string;

  @ApiProperty({ required: true })
  beratBersih: string;

  @ApiProperty({ required: true })
  beratKotor: string;

  @ApiProperty({ required: true })
  bibitAsal: string;

  @ApiProperty({ required: true })
  galur: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirdoc: number; // PK

  @ApiProperty({ required: true })
  ikh: string;

  @ApiProperty({ required: true })
  iup: string;

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  jenisRek: string;

  @ApiProperty({ required: true })
  jmlh: string;

  @ApiProperty({ required: true })
  jumlah: string;

  @ApiProperty({ required: true })
  kajianTeknis: string;

  @ApiProperty({ required: true })
  keputusan: string;

  @ApiProperty({ required: true })
  lokasiMasuk: string;

  @ApiProperty({ required: true })
  Negara_Asal: string;

  @ApiProperty({ required: true })
  pelabuhanAsal: string;

  @ApiProperty({ required: true })
  pelabuhanTujuan: string;

  @ApiProperty({ required: true })
  pemasukkan: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  perizinanDimiliki: string;

  @ApiProperty({ required: true })
  point1: string;

  @ApiProperty({ required: true })
  provMasuk: string;

  @ApiProperty({ required: true })
  SewaMenyewa: string;

  @ApiProperty({ required: true })
  Skdu: string;

  @ApiProperty({ required: true })
  skkh: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  Tdp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglAktependirian: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglKajianTeknis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglNomor: string;

  @ApiProperty({ required: true })
  tglPemasukan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglUkl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tgls: string;

  @ApiProperty({ required: true })
  uklUpl: string;
}
