import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsWarrantyDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  cycle: number;

  @ApiProperty({ required: false })
  days: number;

  @ApiProperty({ required: false })
  effectiveDate: string;

  @ApiProperty({ required: false })
  expairedDate: string;

  @ApiProperty({ required: false })
  hours: number;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idVendor: string;

  @ApiProperty({ required: true })
  idWarranty: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  type: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
