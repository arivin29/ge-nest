import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganSalesPenjualanDto {
  @ApiProperty({ required: true })
  idSalesPenjualan: string;

  @ApiProperty({ required: true })
  nomorPenjualan: string;

  @ApiProperty({ required: true })
  tanggalPenjualan: string;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: false })
  sales: string;

  @ApiProperty({ required: false })
  salesFeePersen: number;

  @ApiProperty({ required: false })
  salesFeeRupiah: number;

  @ApiProperty({ required: false })
  alamatPenagihan: string;

  @ApiProperty({ required: false })
  alamatPengiriman: string;

  @ApiProperty({ required: false })
  subtotal: number;

  @ApiProperty({ required: false })
  totalDiskon: number;

  @ApiProperty({ required: false })
  totalPajakPersen: number;

  @ApiProperty({ required: false })
  totalPajakRupiah: number;

  @ApiProperty({ required: false })
  totalPenjualan: number;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  statusPenjualan: string;

  @ApiProperty({ required: false })
  metodePembayaran: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
