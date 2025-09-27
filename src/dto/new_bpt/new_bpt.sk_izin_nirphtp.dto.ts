import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirphtpDto {
  @ApiProperty({ required: true })
  akta: string;

  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirphtp: number; // PK

  @ApiProperty({ required: true })
  identitas: string;

  @ApiProperty({ required: true })
  jenisHewan: string;

  @ApiProperty({ required: true })
  jumlahEkor: string;

  @ApiProperty({ required: true })
  Kajian_Teknis: string;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  nomorTeknis: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  pelabuhan: string;

  @ApiProperty({ required: true })
  Pemasukan: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  perihals2: string;

  @ApiProperty({ required: true })
  periode: string;

  @ApiProperty({ required: true })
  Propinsi: string;

  @ApiProperty({ required: true })
  rekomKesehatanHewan: string;

  @ApiProperty({ required: true })
  siup: string;

  @ApiProperty({ required: true })
  supplayer: string;

  @ApiProperty({ required: true })
  Surat_Permohonan: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tdp: string;

  @ApiProperty({ required: true })
  tglTeknis: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  tujuan: string;

  @ApiProperty({ required: true })
  Usaha1: string;

  @ApiProperty({ required: true })
  Usaha2: string;
}
