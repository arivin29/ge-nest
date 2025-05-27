import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcJoDto {
  @ApiProperty({ required: true })
  idMpcJo: string;

  @ApiProperty({ required: false })
  numberJo: string;

  @ApiProperty({ required: false })
  compliteCycle: number;

  @ApiProperty({ required: false })
  compliteDate: string;

  @ApiProperty({ required: false })
  cycleFrom: number;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  hourseFrom: number;

  @ApiProperty({ required: false })
  hourseTo: number;

  @ApiProperty({ required: false })
  timeRangeFrom: number;

  @ApiProperty({ required: false })
  timeRangeTo: number;

  @ApiProperty({ required: false })
  onAircraft: string;

  @ApiProperty({ required: false })
  roflag: string;

  @ApiProperty({ required: false })
  noteJo: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idTypeOfwork: string;

  @ApiProperty({ required: false })
  workDue: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: false })
  originalHours: number;

  @ApiProperty({ required: false })
  originalCycle: number;

  @ApiProperty({ required: false })
  statusJo: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  onSite: number;

  @ApiProperty({ required: false })
  idDueList: string;

  @ApiProperty({ required: false })
  dateJo: string;

  @ApiProperty({ required: false })
  reference: string;

  @ApiProperty({ required: false })
  isPriority: string;

  @ApiProperty({ required: false })
  originalDate: string;

  @ApiProperty({ required: false })
  action: string;

  @ApiProperty({ required: false })
  compliteHours: number;

  @ApiProperty({ required: false })
  parentAss: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  customJob: string;

  @ApiProperty({ required: false })
  customRef: string;

  @ApiProperty({ required: false })
  customIssued: string;
}
