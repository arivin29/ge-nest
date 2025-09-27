import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirpphpDto {
  @ApiProperty({ required: true })
  adm: string;

  @ApiProperty({ required: true })
  alamatPengirim: string;

  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirpphp: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  jenisProduk: string;

  @ApiProperty({ required: true })
  jumlah: string;

  @ApiProperty({ required: true })
  Kajian_Teknis: string;

  @ApiProperty({ required: true })
  ket: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  nkv: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  periode: string;

  @ApiProperty({ required: true })
  Surat_Permohonan: string;

  @ApiProperty({ required: true })
  tanggalAkhir: string;

  @ApiProperty({ required: true })
  tanggalAwal: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  totalSemua: string;

  @ApiProperty({ required: true })
  tujuan: string;
}
