import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPurchaseInvoiceItemDto {
  @ApiProperty({ required: true })
  idPurchaseInvoiceItem: string;

  @ApiProperty({ required: true })
  idPurchaseInvoice: string;

  @ApiProperty({ required: false })
  idPurchaseOrderItem: string;

  @ApiProperty({ required: true })
  idSalesBarang: string;

  @ApiProperty({ required: true })
  namaProduk: string;

  @ApiProperty({ required: true })
  satuan: string;

  @ApiProperty({ required: true })
  qty: number;

  @ApiProperty({ required: true })
  hargaSatuan: number;

  @ApiProperty({ required: false })
  diskonPersen: number;

  @ApiProperty({ required: false })
  diskonNominal: number;

  @ApiProperty({ required: false })
  pajakPersen: number;

  @ApiProperty({ required: false })
  subtotal: number;

  @ApiProperty({ required: false })
  keterangan: string;
}
