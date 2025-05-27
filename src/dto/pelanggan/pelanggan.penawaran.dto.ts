import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPenawaranDto {
  @ApiProperty({ required: true })
  idPenawaran: string;

  @ApiProperty({ required: true })
  kodePenawaran: string;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: true })
  judulPenawaran: string;

  @ApiProperty({ required: true })
  tanggalPenawaran: string;

  @ApiProperty({ required: false })
  masaBerlakuHari: number;

  @ApiProperty({ required: false })
  tanggalExpired: string;

  @ApiProperty({ required: false })
  versiRevisi: number;

  @ApiProperty({ required: false })
  idPenawaranAsal: string;

  @ApiProperty({ required: false })
  statusPenawaran: string;

  @ApiProperty({ required: false })
  idContract: string;

  @ApiProperty({ required: false })
  hargaModalTotal: number;

  @ApiProperty({ required: false })
  hargaBatasMinimumTotal: number;

  @ApiProperty({ required: false })
  hargaTawaranTotal: number;

  @ApiProperty({ required: false })
  hargaDealTotal: number;

  @ApiProperty({ required: false })
  metodePembayaran: string;

  @ApiProperty({ required: false })
  jadwalPembayaranJson: string;

  @ApiProperty({ required: false })
  syaratKondisi: string;

  @ApiProperty({ required: false })
  catatanInternal: string;

  @ApiProperty({ required: false })
  catatanEksternal: string;

  @ApiProperty({ required: false })
  pathFileLampiran: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
