import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurVendorContactDto {
  @ApiProperty({ required: false })
  address: string;

  @ApiProperty({ required: false })
  city: string;

  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  fax: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: true })
  idPurVendorContact: string;

  @ApiProperty({ required: false })
  linePhone: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  phone: string;

  @ApiProperty({ required: false })
  pic: string;

  @ApiProperty({ required: false })
  postcode: string;

  @ApiProperty({ required: false })
  state: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
