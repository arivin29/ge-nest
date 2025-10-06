import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsDueListDto {
  @ApiProperty({ required: false })
  currentCycle: number;

  @ApiProperty({ required: false })
  currentHours: number;

  @ApiProperty({ required: false })
  cycleFrom: number;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  dateDue: string;

  @ApiProperty({ required: false })
  dueAcCycle: number;

  @ApiProperty({ required: false })
  dueAcHours: number;

  @ApiProperty({ required: false })
  dueCycle: number;

  @ApiProperty({ required: false })
  dueDate: string;

  @ApiProperty({ required: false })
  dueHours: number;

  @ApiProperty({ required: false })
  hoursFrom: number;

  @ApiProperty({ required: false })
  hoursTo: number;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: true })
  idDueList: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idTypeOfwork: string;

  @ApiProperty({ required: false })
  lastCycle: number;

  @ApiProperty({ required: false })
  lastDate: string;

  @ApiProperty({ required: false })
  lastHours: number;

  @ApiProperty({ required: false })
  noteDue: string;

  @ApiProperty({ required: false })
  onSite: number;

  @ApiProperty({ required: false })
  parentAss: string;

  @ApiProperty({ required: false })
  parentCycle: number;

  @ApiProperty({ required: false })
  parentHours: number;

  @ApiProperty({ required: false })
  parentTime: number;

  @ApiProperty({ required: false })
  remainingCycle: number;

  @ApiProperty({ required: false })
  remainingDay: string;

  @ApiProperty({ required: false })
  remainingHours: number;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  timeFrom: number;

  @ApiProperty({ required: false })
  timeTo: number;

  @ApiProperty({ required: false })
  timeUnit: string;

  @ApiProperty({ required: false })
  typeDue: string;

  @ApiProperty({ required: false })
  typeOfwork: string;
}
