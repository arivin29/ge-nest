import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsWpJoDto {
  @ApiProperty({ required: false })
  carriedOutDate: string;

  @ApiProperty({ required: false })
  completedAt: string;

  @ApiProperty({ required: false })
  compliteCycle: number;

  @ApiProperty({ required: false })
  compliteDate: string;

  @ApiProperty({ required: false })
  compliteHours: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  cycleFrom: number;

  @ApiProperty({ required: false })
  cycleTo: number;

  @ApiProperty({ required: false })
  dateJo: string;

  @ApiProperty({ required: false })
  enginerApprovedBy: string;

  @ApiProperty({ required: false })
  enginerApprovedDate: string;

  @ApiProperty({ required: false })
  enginerApprovedNote: number;

  @ApiProperty({ required: false })
  formNo: string;

  @ApiProperty({ required: false })
  hourseFrom: number;

  @ApiProperty({ required: false })
  hourseTo: number;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idDueListOutput: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: false })
  idMaintenanceProgram: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  idUnscheduleMaintenance: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idWorkCompleted: string;

  @ApiProperty({ required: false })
  idWp: string;

  @ApiProperty({ required: true })
  idWpJo: string;

  @ApiProperty({ required: false })
  inspectorApprovedAt: string;

  @ApiProperty({ required: false })
  inspectorApprovedBy: string;

  @ApiProperty({ required: false })
  inspectorApprovedNote: string;

  @ApiProperty({ required: false })
  noteJo: string;

  @ApiProperty({ required: false })
  numberJo: string;

  @ApiProperty({ required: false })
  parentEquipmentType: string;

  @ApiProperty({ required: false })
  priority: string;

  @ApiProperty({ required: false })
  reference: string;

  @ApiProperty({ required: false })
  statusWpJo: string;

  @ApiProperty({ required: false })
  timeRangeFrom: string;

  @ApiProperty({ required: false })
  timeRangeTo: number;

  @ApiProperty({ required: false })
  timeVariable: string;

  @ApiProperty({ required: false })
  totalHoursWork: number;

  @ApiProperty({ required: false })
  typeOfwork: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  workDue: string;
}
