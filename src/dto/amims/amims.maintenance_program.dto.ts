import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  hoursTo: number;

  @ApiProperty({ required: false })
  idActype: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: true })
  idMaintenanceProgram: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  isActive: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  programCode: string;

  @ApiProperty({ required: false })
  programTitle: string;

  @ApiProperty({ required: false })
  referenceDoc: string;

  @ApiProperty({ required: false })
  timeTo: number;

  @ApiProperty({ required: false })
  timeToUnit: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
