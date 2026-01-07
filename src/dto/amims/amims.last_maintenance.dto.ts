import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLastMaintenanceDto {
  @ApiProperty({ required: true })
  idLastMaintenance: string;

  @ApiProperty({ required: false })
  idWpJo: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: false })
  lastDate: string;

  @ApiProperty({ required: false })
  lastCycle: number;

  @ApiProperty({ required: false })
  lastHours: number;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  typeOfWork: number;

  @ApiProperty({ required: false })
  parentCycle: number;

  @ApiProperty({ required: false })
  parentHours: number;

  @ApiProperty({ required: false })
  oldId: string;
}
