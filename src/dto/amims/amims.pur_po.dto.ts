import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurPoDto {
  @ApiProperty({ required: true })
  idPurPo: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: false })
  numberPo: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  approveDirector: number;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  datePo: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  priceTotal: number;

  @ApiProperty({ required: false })
  vat: number;

  @ApiProperty({ required: false })
  dateDeadline: string;

  @ApiProperty({ required: false })
  idPosition: string;

  @ApiProperty({ required: false })
  statusPo: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idCurrency: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  notePo: string;

  @ApiProperty({ required: false })
  typePo: string;

  @ApiProperty({ required: false })
  idPurVendorContact: string;

  @ApiProperty({ required: false })
  modeOfTransport: string;

  @ApiProperty({ required: false })
  quotationNumber: string;

  @ApiProperty({ required: false })
  quotationDate: string;

  @ApiProperty({ required: false })
  term: string;

  @ApiProperty({ required: false })
  shipping: string;

  @ApiProperty({ required: false })
  dateAccDirector: string;

  @ApiProperty({ required: false })
  idUserManager: string;

  @ApiProperty({ required: false })
  idUserDirector: string;

  @ApiProperty({ required: false })
  oldPo: string;
}
