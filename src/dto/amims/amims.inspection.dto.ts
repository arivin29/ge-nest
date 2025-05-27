import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsInspectionDto {
  @ApiProperty({ required: true })
  idInspection: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  flightHoursTo: number;

  @ApiProperty({ required: false })
  timeRangeTo: number;

  @ApiProperty({ required: false })
  timeUnit: string;

  @ApiProperty({ required: false })
  repetitions: number;

  @ApiProperty({ required: false })
  noteInspection: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  atachapter: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  oldId: string;
}
