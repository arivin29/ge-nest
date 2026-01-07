import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganSalesBarangDto {
  @ApiProperty({ required: true })
  idSalesBarang: string;

  @ApiProperty({ required: false })
  kategori: string;

  @ApiProperty({ required: false })
  kodeBarang: string;

  @ApiProperty({ required: true })
  namaBarang: string;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: false })
  satuan: string;

  @ApiProperty({ required: false })
  hargaJual: number;

  @ApiProperty({ required: false })
  hargaModal: number;

  @ApiProperty({ required: false })
  serialNumber: string;

  @ApiProperty({ required: false })
  tipeBarang: string;

  @ApiProperty({ required: false })
  pajakPersen: number;

  @ApiProperty({ required: false })
  statusSalesBarang: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
