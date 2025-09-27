import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirmphnDto {
  @ApiProperty({ required: true })
  Akta_Pendirian: string;

  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  Angka_Pengenal: string;

  @ApiProperty({ required: true })
  Ekor: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirmphn: number; // PK

  @ApiProperty({ required: true })
  identitas: string;

  @ApiProperty({ required: true })
  ikh: string;

  @ApiProperty({ required: true })
  Jenis_Hewan: string;

  @ApiProperty({ required: true })
  judulTingkatOlahan: string;

  @ApiProperty({ required: true })
  Kajian_Teknis: string;

  @ApiProperty({ required: true })
  Keputusan_Bupati: string;

  @ApiProperty({ required: true })
  ket: string;

  @ApiProperty({ required: true })
  ketJenis: string;

  @ApiProperty({ required: true })
  ketJumlah: string;

  @ApiProperty({ required: true })
  negara: string;

  @ApiProperty({ required: true })
  Negara_Asal: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  pelabuhan: string;

  @ApiProperty({ required: true })
  pelabuhanPemasukkan: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  periode: string;

  @ApiProperty({ required: true })
  Siup: string;

  @ApiProperty({ required: true })
  Skdu: string;

  @ApiProperty({ required: true })
  Surat_Permohonan: string;

  @ApiProperty({ required: true })
  tanggalAkhir: string;

  @ApiProperty({ required: true })
  tanggalAwal: string;

  @ApiProperty({ required: true })
  Tdp: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  tingkatOlahan: string;

  @ApiProperty({ required: true })
  tujuan: string;
}
