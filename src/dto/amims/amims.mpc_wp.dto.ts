import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcWpDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  endDateWp: string;

  @ApiProperty({ required: false })
  endHours: number;

  @ApiProperty({ required: false })
  engineEnd: string;

  @ApiProperty({ required: false })
  engineStart: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: true })
  idMpcWp: string;

  @ApiProperty({ required: false })
  idUserMm: string;

  @ApiProperty({ required: false })
  idUserMpc: string;

  @ApiProperty({ required: false })
  noteWp: string;

  @ApiProperty({ required: false })
  numberWp: string;

  @ApiProperty({ required: false })
  onSite: number;

  @ApiProperty({ required: false })
  period: string;

  @ApiProperty({ required: false })
  periodYear: number;

  @ApiProperty({ required: false })
  place: string;

  @ApiProperty({ required: false })
  reason: string;

  @ApiProperty({ required: false })
  startDateWp: string;

  @ApiProperty({ required: false })
  startHours: number;

  @ApiProperty({ required: false })
  statusWp: string;

  @ApiProperty({ required: false })
  typeWork: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validated: number;
}
