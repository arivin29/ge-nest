import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechLogItemDto {
  @ApiProperty({ required: true })
  idTechLogItem: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  idCaptain: string;

  @ApiProperty({ required: false })
  cocaCaptain: string;

  @ApiProperty({ required: false })
  flightFrom: string;

  @ApiProperty({ required: false })
  flightTo: string;

  @ApiProperty({ required: false })
  flightHours: number;

  @ApiProperty({ required: false })
  takeofTime: string;

  @ApiProperty({ required: false })
  landingTime: string;

  @ApiProperty({ required: false })
  landings: number;

  @ApiProperty({ required: false })
  cycles: number;

  @ApiProperty({ required: false })
  noteTechLogItem: string;

  @ApiProperty({ required: false })
  apuStart: number;

  @ApiProperty({ required: false })
  hoistOperation: string;

  @ApiProperty({ required: false })
  hoistUsage: number;

  @ApiProperty({ required: false })
  slingReleased: number;

  @ApiProperty({ required: false })
  cgPenalty: string;
}
