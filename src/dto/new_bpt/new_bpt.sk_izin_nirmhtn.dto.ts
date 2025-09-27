import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirmhtnDto {
  @ApiProperty({ required: true })
  akta: string;

  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  Angka_Pengenal: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirmhtn: number; // PK

  @ApiProperty({ required: true })
  ikh: string;

  @ApiProperty({ required: true })
  iup: string;

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  jenisRas: string;

  @ApiProperty({ required: true })
  jmlh: string;

  @ApiProperty({ required: true })
  jumlah: string;

  @ApiProperty({ required: true })
  Kajian_Teknis: string;

  @ApiProperty({ required: true })
  keputusan: string;

  @ApiProperty({ required: true })
  ket: string;

  @ApiProperty({ required: true })
  negara: string;

  @ApiProperty({ required: true })
  Negara_Asal: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  pelabuhan: string;

  @ApiProperty({ required: true })
  pemasukkan: string;

  @ApiProperty({ required: true })
  perencanaPemasukkan: string;

  @ApiProperty({ required: true })
  perihal3: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  poin1: string;

  @ApiProperty({ required: true })
  prinsip: string;

  @ApiProperty({ required: true })
  SewaMenyewa: string;

  @ApiProperty({ required: true })
  Siup: string;

  @ApiProperty({ required: true })
  Skdu: string;

  @ApiProperty({ required: true })
  skkh: string;

  @ApiProperty({ required: true })
  strain: string;

  @ApiProperty({ required: true })
  Surat_Permohonan: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  TanggalPemasukkan: string;

  @ApiProperty({ required: true })
  Tdp: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  tipeJumlah: string;

  @ApiProperty({ required: true })
  tujuan: string;

  @ApiProperty({ required: true })
  uklUpl: string;
}
