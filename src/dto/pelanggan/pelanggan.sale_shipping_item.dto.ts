import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganSaleShippingItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  idSaleShipping: string;

  @ApiProperty({ required: true })
  idSaleShippingItem: string;

  @ApiProperty({ required: true })
  idSalesPenjualanItem: string;

  @ApiProperty({ required: true })
  qtyKirim: number;

  @ApiProperty({ required: false })
  updatedAt: string;
}
