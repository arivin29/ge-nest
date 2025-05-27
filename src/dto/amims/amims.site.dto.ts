import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsSiteDto {
  @ApiProperty({ required: true })
  idSite: string;

  @ApiProperty({ required: false })
  site: string;

  @ApiProperty({ required: false })
  parentSite: number;

  @ApiProperty({ required: false })
  address: string;

  @ApiProperty({ required: false })
  typeSite: string;

  @ApiProperty({ required: false })
  codeSite: string;

  @ApiProperty({ required: false })
  logoSite: string;

  @ApiProperty({ required: false })
  telephone: string;

  @ApiProperty({ required: false })
  fax: string;

  @ApiProperty({ required: false })
  statusSite: number;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validation: number;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  idNewSite: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  isStore: string;

  @ApiProperty({ required: false })
  isMain: number;

  @ApiProperty({ required: false })
  city: string;

  @ApiProperty({ required: false })
  contactname: string;

  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false })
  emailaddress: string;

  @ApiProperty({ required: false })
  mobile: string;
}
