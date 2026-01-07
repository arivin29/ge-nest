import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganInvoiceItemDto {
  @ApiProperty({ required: true })
  idInvoiceItem: string;

  @ApiProperty({ required: true })
  idInvoice: string;

  @ApiProperty({ required: true })
  fromModuleIdItem: string;

  @ApiProperty({ required: false })
  deskripsiBarang: string;

  @ApiProperty({ required: false })
  satuan: string;

  @ApiProperty({ required: true })
  qty: number;

  @ApiProperty({ required: true })
  hargaSatuan: number;

  @ApiProperty({ required: false })
  diskon: number;

  @ApiProperty({ required: true })
  totalRupiah: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
