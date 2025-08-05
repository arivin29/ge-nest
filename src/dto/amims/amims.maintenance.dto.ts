import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceDto {
  @ApiProperty({ required: false })
  atachapter: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  cycleFrom: number;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  flightHoursFrom: number;

  @ApiProperty({ required: false })
  flightHoursTo: number;

  @ApiProperty({ required: true })
  idMaintenance: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  noteMaintenance: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  onLocation: string;

  @ApiProperty({ required: false })
  repetitions: number;

  @ApiProperty({ required: false })
  timeRangeForm: number;

  @ApiProperty({ required: false })
  timeRangeTo: number;

  @ApiProperty({ required: false })
  timeUnit: string;

  @ApiProperty({ required: false })
  typeMaintenance: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
