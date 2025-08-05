import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurVendorDto {
  @ApiProperty({ required: false })
  address: string;

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  column1: string;

  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  defaultCurrency: string;

  @ApiProperty({ required: false })
  deliveryTime: number;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  fax: string;

  @ApiProperty({ required: false })
  idMcurrency: string;

  @ApiProperty({ required: true })
  idPurVendor: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  isManufacture: string;

  @ApiProperty({ required: false })
  isRepairer: string;

  @ApiProperty({ required: false })
  isShipper: string;

  @ApiProperty({ required: false })
  isVendor: string;

  @ApiProperty({ required: false })
  isWorkshop: string;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  nameVendor: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  pic: string;

  @ApiProperty({ required: false })
  postcode: string;

  @ApiProperty({ required: false })
  rating: string;

  @ApiProperty({ required: false })
  services: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  telephone: string;

  @ApiProperty({ required: false })
  timezone: string;

  @ApiProperty({ required: false })
  tremPayment: number;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
