import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganSaleShippingDto {
  @ApiProperty({ required: false })
  biayaEkspedisi: number;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  driverName: string;

  @ApiProperty({ required: true })
  idSaleShipping: string;

  @ApiProperty({ required: true })
  idSalesPenjualan: string;

  @ApiProperty({ required: false })
  namaEkspedisi: string;

  @ApiProperty({ required: false })
  noPolisi: string;

  @ApiProperty({ required: false })
  nomorResi: string;

  @ApiProperty({ required: true })
  nomorSuratJalan: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: true })
  tanggalKirim: string;

  @ApiProperty({ required: false })
  tipePengiriman: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
