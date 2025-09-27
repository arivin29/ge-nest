import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNippbtDto {
  @ApiProperty({ required: true })
  alamatSurat: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNippbt: number; // PK

  @ApiProperty({ required: true })
  jenisTernak: string;

  @ApiProperty({ required: true })
  jmlhCampuran: string;

  @ApiProperty({ required: true })
  jmlhDewasa: string;

  @ApiProperty({ required: true })
  jmlhModal: string;

  @ApiProperty({ required: true })
  jmlhStraint: string;

  @ApiProperty({ required: true })
  jumlah: string;

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  kegiatan: string;

  @ApiProperty({ required: true })
  luasLahan: string;

  @ApiProperty({ required: true })
  macamProduksi: string;

  @ApiProperty({ required: true })
  modalPinjaman: string;

  @ApiProperty({ required: true })
  modalSendiri: string;

  @ApiProperty({ required: true })
  perihal: string;

  @ApiProperty({ required: true })
  produksiThn: string;

  @ApiProperty({ required: true })
  tglSurat: string;
}
