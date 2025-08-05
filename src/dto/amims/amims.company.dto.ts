import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsCompanyDto {
  @ApiProperty({ required: false })
  address1: string;

  @ApiProperty({ required: false })
  address2: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  fax: string;

  @ApiProperty({ required: false })
  hasIdUser: number;

  @ApiProperty({ required: true })
  idCompany: string;

  @ApiProperty({ required: false })
  isDefault: number;

  @ApiProperty({ required: false })
  nameCompany: string;

  @ApiProperty({ required: false })
  phone: string;

  @ApiProperty({ required: false })
  statusCompany: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  website: string;
}
