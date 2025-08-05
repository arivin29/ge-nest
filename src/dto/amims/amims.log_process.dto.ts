import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLogProcessDto {
  @ApiProperty({ required: false })
  adj1: number;

  @ApiProperty({ required: false })
  adj2: number;

  @ApiProperty({ required: false })
  adj3: number;

  @ApiProperty({ required: false })
  bugIndexLog: number;

  @ApiProperty({ required: false })
  calculatedCycle: string;

  @ApiProperty({ required: false })
  calculatedHours: string;

  @ApiProperty({ required: false })
  cgPenalti: string;

  @ApiProperty({ required: false })
  cycle: number;

  @ApiProperty({ required: false })
  cycleBf: number;

  @ApiProperty({ required: false })
  cycleCf: number;

  @ApiProperty({ required: false })
  cycleFlight: number;

  @ApiProperty({ required: false })
  factor1: number;

  @ApiProperty({ required: false })
  factor2: number;

  @ApiProperty({ required: false })
  factor3: number;

  @ApiProperty({ required: false })
  fullCycleBf: number;

  @ApiProperty({ required: false })
  fullCycleFlt: number;

  @ApiProperty({ required: false })
  hasFor: string;

  @ApiProperty({ required: false })
  hasUpdate: number;

  @ApiProperty({ required: false })
  hoistLeft: number;

  @ApiProperty({ required: false })
  hoistOperation: string;

  @ApiProperty({ required: false })
  hoistRight: number;

  @ApiProperty({ required: false })
  hoistUsage: number;

  @ApiProperty({ required: false })
  hours: number;

  @ApiProperty({ required: false })
  hoursBf: number;

  @ApiProperty({ required: false })
  hoursCf: number;

  @ApiProperty({ required: false })
  hoursFlight: number;

  @ApiProperty({ required: true })
  idLogProcess: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idPartInstall: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  landings: number;

  @ApiProperty({ required: false })
  n1: number;

  @ApiProperty({ required: false })
  n2: number;

  @ApiProperty({ required: false })
  parent: string;

  @ApiProperty({ required: false })
  partCycleBf: number;

  @ApiProperty({ required: false })
  partCycleFlt: number;

  @ApiProperty({ required: false })
  rumusCycle: string;

  @ApiProperty({ required: false })
  rumusHours: string;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  timeAboveBf: number;

  @ApiProperty({ required: false })
  timeAboveFlt: number;

  @ApiProperty({ required: false })
  tsnCycle: number;

  @ApiProperty({ required: false })
  tsnHours: number;

  @ApiProperty({ required: false })
  useHoistLeft: number;

  @ApiProperty({ required: false })
  useHoistRight: number;

  @ApiProperty({ required: false })
  xcycleInput: number;
}
