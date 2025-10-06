import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsUnscheduleMaintenanceDto {
  @ApiProperty({ required: false })
  abortStatus: string;

  @ApiProperty({ required: false })
  actionCode: string;

  @ApiProperty({ required: false })
  aircraftGrounded: string;

  @ApiProperty({ required: false })
  airframeSn: string;

  @ApiProperty({ required: false })
  amlNumber: string;

  @ApiProperty({ required: false })
  ataCode: string;

  @ApiProperty({ required: false })
  complianceLastPerformedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  delayStatus: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  discoveredBy: string;

  @ApiProperty({ required: false })
  discoveryPoint: string;

  @ApiProperty({ required: false })
  hiddenDamageRequired: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: true })
  idUnscheduleMaintenance: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  inspectionDate: string;

  @ApiProperty({ required: false })
  inspectionRequired: string;

  @ApiProperty({ required: false })
  inspector: string;

  @ApiProperty({ required: false })
  isOptional: string;

  @ApiProperty({ required: false })
  lastUpdatedBy: string;

  @ApiProperty({ required: false })
  nextDueDate: string;

  @ApiProperty({ required: false })
  nextDueHours: string;

  @ApiProperty({ required: false })
  nextDueLandings: number;

  @ApiProperty({ required: false })
  nextDueParam: string;

  @ApiProperty({ required: false })
  notes: string;

  @ApiProperty({ required: false })
  preliminaryNote: string;

  @ApiProperty({ required: false })
  refNumber: string;

  @ApiProperty({ required: false })
  reference: string;

  @ApiProperty({ required: false })
  reportedDate: string;

  @ApiProperty({ required: false })
  reportedHours: string;

  @ApiProperty({ required: false })
  reportedLandings: number;

  @ApiProperty({ required: false })
  resolvedDate: string;

  @ApiProperty({ required: false })
  resolvedHours: string;

  @ApiProperty({ required: false })
  resolvedLandings: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  type: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
