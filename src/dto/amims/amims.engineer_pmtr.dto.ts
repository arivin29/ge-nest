import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPmtrDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  datePmtr: string;

  @ApiProperty({ required: false })
  fromSite: number;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: true })
  idEngineerPmtr: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idUserAcc: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  notePmtr: string;

  @ApiProperty({ required: false })
  numberPmtr: string;

  @ApiProperty({ required: false })
  statusPmtr: string;

  @ApiProperty({ required: false })
  toSite: number;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
