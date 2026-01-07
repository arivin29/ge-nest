import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurPrDto {
  @ApiProperty({ required: true })
  idPurPr: string;

  @ApiProperty({ required: false })
  datePr: string;

  @ApiProperty({ required: false })
  numberPr: string;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  statusPr: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  notePr: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  idUserAcc: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  typePr: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  idPosition: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  oldPr: string;
}
