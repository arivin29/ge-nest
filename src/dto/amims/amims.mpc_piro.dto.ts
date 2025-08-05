import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcPiroDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  datePiro: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: true })
  idMpcPiro: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idUserAcc: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  notePiro: string;

  @ApiProperty({ required: false })
  numberPiro: string;

  @ApiProperty({ required: false })
  statusPiro: string;

  @ApiProperty({ required: false })
  typePiro: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
