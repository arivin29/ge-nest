import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPrisDto {
  @ApiProperty({ required: true })
  idEngineerPris: string;

  @ApiProperty({ required: false })
  datePris: string;

  @ApiProperty({ required: false })
  numberPris: string;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  statusPris: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  notePris: string;

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
  typePris: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  idPosition: string;

  @ApiProperty({ required: false })
  priority: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  dateClose: string;

  @ApiProperty({ required: false })
  idUserClose: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  dateInstall: string;

  @ApiProperty({ required: false })
  numberWp: string;

  @ApiProperty({ required: false })
  numberJo: string;

  @ApiProperty({ required: false })
  dateIssued: string;

  @ApiProperty({ required: false })
  idUserIssued: string;
}
