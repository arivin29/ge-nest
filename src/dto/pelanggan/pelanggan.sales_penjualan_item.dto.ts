import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganSalesPenjualanItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  diskonNominal: number;

  @ApiProperty({ required: false })
  diskonPersen: number;

  @ApiProperty({ required: false })
  hargaModal: number;

  @ApiProperty({ required: false })
  hargaSatuan: number;

  @ApiProperty({ required: true })
  idSalesBarang: string;

  @ApiProperty({ required: true })
  idSalesPenjualan: string;

  @ApiProperty({ required: true })
  idSalesPenjualanItem: string;

  @ApiProperty({ required: true })
  namaBarang: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  satuan: string;

  @ApiProperty({ required: false })
  statusPengiriman: string;

  @ApiProperty({ required: false })
  totalRupiah: number;

  @ApiProperty({ required: false })
  updatedAt: string;
}
