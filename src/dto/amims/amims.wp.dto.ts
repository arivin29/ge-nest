import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsWpDto {
  @ApiProperty({ required: false })
  airframeEndHours: number;

  @ApiProperty({ required: false })
  airframeStartHours: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  endDateWp: string;

  @ApiProperty({ required: false })
  engineDua: string;

  @ApiProperty({ required: false })
  engineDuaEnd: number;

  @ApiProperty({ required: false })
  engineDuaStart: number;

  @ApiProperty({ required: false })
  engineSatu: string;

  @ApiProperty({ required: false })
  engineSatuEnd: number;

  @ApiProperty({ required: false })
  engineSatuStart: number;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idUserMm: string;

  @ApiProperty({ required: true })
  idWp: string;

  @ApiProperty({ required: false })
  noteWp: string;

  @ApiProperty({ required: false })
  numberWp: string;

  @ApiProperty({ required: false })
  period: string;

  @ApiProperty({ required: false })
  periodYear: number;

  @ApiProperty({ required: false })
  place: string;

  @ApiProperty({ required: false })
  preparedBy: string;

  @ApiProperty({ required: false })
  reason: string;

  @ApiProperty({ required: false })
  startDateWp: string;

  @ApiProperty({ required: false })
  statusWp: string;

  @ApiProperty({ required: false })
  typeWork: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
