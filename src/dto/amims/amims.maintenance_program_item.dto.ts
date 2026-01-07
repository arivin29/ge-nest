import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramItemDto {
  @ApiProperty({ required: true })
  idMaintenanceProgramItem: string;

  @ApiProperty({ required: true })
  idMaintenanceProgram: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  hoursTo: number;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  timeTo: number;

  @ApiProperty({ required: false })
  timeToUnit: string;

  @ApiProperty({ required: false })
  sequenceNo: number;

  @ApiProperty({ required: false })
  isActive: boolean;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
