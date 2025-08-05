import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPurchaseOrderItemDto {
  @ApiProperty({ required: false })
  diskonNominal: number;

  @ApiProperty({ required: false })
  diskonPersen: number;

  @ApiProperty({ required: false })
  fromModule: string;

  @ApiProperty({ required: false })
  fromModuleId: string;

  @ApiProperty({ required: false })
  fromModuleNomor: string;

  @ApiProperty({ required: true })
  hargaSatuan: number;

  @ApiProperty({ required: true })
  idProduk: string;

  @ApiProperty({ required: true })
  idPurchaseOrder: string;

  @ApiProperty({ required: true })
  idPurchaseOrderItem: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: true })
  namaProduk: string;

  @ApiProperty({ required: false })
  pajakPersen: number;

  @ApiProperty({ required: true })
  qty: number;

  @ApiProperty({ required: true })
  satuan: string;

  @ApiProperty({ required: false })
  subtotal: number;
}
