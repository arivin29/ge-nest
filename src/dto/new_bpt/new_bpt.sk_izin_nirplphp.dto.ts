import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirplphpDto {
  @ApiProperty({ required: true })
  akta: string;

  @ApiProperty({ required: true })
  aktaSaham: string;

  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  halal: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirplphp: number; // PK

  @ApiProperty({ required: true })
  jenisJumlah: string;

  @ApiProperty({ required: true })
  jenisProduk: string;

  @ApiProperty({ required: true })
  jumlah: string;

  @ApiProperty({ required: true })
  kajianTeknis: string;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  periode: string;

  @ApiProperty({ required: true })
  pernyataan: string;

  @ApiProperty({ required: true })
  sartek: string;

  @ApiProperty({ required: true })
  siup: string;

  @ApiProperty({ required: true })
  skdu: string;

  @ApiProperty({ required: true })
  suratPermohonan: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tdp: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  tujuan: string;
}
