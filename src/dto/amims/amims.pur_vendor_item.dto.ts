import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurVendorItemDto {
  @ApiProperty({ required: true })
  idPurVendorItem: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  manufacture: string;

  @ApiProperty({ required: false })
  price: number;

  @ApiProperty({ required: false })
  minOrder: number;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  responseTime: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;
}
