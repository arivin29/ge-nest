import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechLogDto {
  @ApiProperty({ required: false })
  authoRized: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  cycleBf: number;

  @ApiProperty({ required: false })
  cycleCf: number;

  @ApiProperty({ required: false })
  cycleFlight: number;

  @ApiProperty({ required: false })
  dateInspection: string;

  @ApiProperty({ required: false })
  hoursBf: number;

  @ApiProperty({ required: false })
  hoursCf: number;

  @ApiProperty({ required: false })
  hoursFlight: number;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: true })
  idTechLog: string;

  @ApiProperty({ required: false })
  idUserAcc: string;

  @ApiProperty({ required: false })
  idUserInspection: string;

  @ApiProperty({ required: false })
  idUserLog: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  isEdit: number;

  @ApiProperty({ required: false })
  lastUpdate: number;

  @ApiProperty({ required: false })
  noteLog: string;

  @ApiProperty({ required: false })
  numberLog: string;

  @ApiProperty({ required: false })
  numberNext: number;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  pesan: string;

  @ApiProperty({ required: false })
  place: number;

  @ApiProperty({ required: false })
  techLogDate: string;

  @ApiProperty({ required: false })
  totalCycle: number;

  @ApiProperty({ required: false })
  totalFlight: number;

  @ApiProperty({ required: false })
  totalFuel: number;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  xycleInput: number;
}
