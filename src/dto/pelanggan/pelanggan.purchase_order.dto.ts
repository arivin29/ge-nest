import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPurchaseOrderDto {
  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  detailClient: string;

  @ApiProperty({ required: false })
  grandTotal: number;

  @ApiProperty({ required: false })
  idClient: string;

  @ApiProperty({ required: true })
  idKantor: string;

  @ApiProperty({ required: true })
  idPurchaseOrder: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  jenis: string;

  @ApiProperty({ required: false })
  namaClient: number;

  @ApiProperty({ required: true })
  nomorPo: string;

  @ApiProperty({ required: false })
  shipping: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  tanggalDikirim: string;

  @ApiProperty({ required: false })
  tanggalDiterima: string;

  @ApiProperty({ required: true })
  tanggalPo: string;

  @ApiProperty({ required: false })
  totalDiskon: number;

  @ApiProperty({ required: false })
  totalHarga: number;

  @ApiProperty({ required: false })
  totalPajak: number;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
