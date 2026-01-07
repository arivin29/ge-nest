import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerRtiDto {
  @ApiProperty({ required: true })
  idEngineerRti: string;

  @ApiProperty({ required: false })
  idWpJo: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  statusRti: string;

  @ApiProperty({ required: false })
  base: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  tsnCycle: number;

  @ApiProperty({ required: false })
  tsnHours: number;

  @ApiProperty({ required: false })
  tsnVar: string;

  @ApiProperty({ required: false })
  tsnVal: number;

  @ApiProperty({ required: false })
  tsoCycle: number;

  @ApiProperty({ required: false })
  tsoHours: number;

  @ApiProperty({ required: false })
  tsoVar: string;

  @ApiProperty({ required: false })
  tsoVal: number;

  @ApiProperty({ required: false })
  tsnCycleParent: number;

  @ApiProperty({ required: false })
  tsnHoursParent: number;

  @ApiProperty({ required: false })
  reason: string;

  @ApiProperty({ required: false })
  remainingHours: number;

  @ApiProperty({ required: false })
  returnBy: number;

  @ApiProperty({ required: false })
  inspectedBy: number;

  @ApiProperty({ required: false })
  receivedBy: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  numberRti: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  hashRpd: string;

  @ApiProperty({ required: false })
  dateRti: string;

  @ApiProperty({ required: false })
  dispotition: number;

  @ApiProperty({ required: false })
  statusService: string;

  @ApiProperty({ required: false })
  typeRti: string;

  @ApiProperty({ required: false })
  hashProcess: string;

  @ApiProperty({ required: false })
  hashTechLog: string;

  @ApiProperty({ required: false })
  idPartInstall: string;

  @ApiProperty({ required: false })
  hasPris: string;

  @ApiProperty({ required: false })
  remarkDisposisi: string;
}
