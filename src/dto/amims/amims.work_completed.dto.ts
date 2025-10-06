import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsWorkCompletedDto {
  @ApiProperty({ required: false })
  accountCode: string;

  @ApiProperty({ required: false })
  actualWorkHours: number;

  @ApiProperty({ required: false })
  adSbNumber: string;

  @ApiProperty({ required: false })
  adminNotes: string;

  @ApiProperty({ required: false })
  ataCode: string;

  @ApiProperty({ required: false })
  authority: string;

  @ApiProperty({ required: false })
  caseNumber: string;

  @ApiProperty({ required: true })
  completionDate: string;

  @ApiProperty({ required: false })
  complianceDate: string;

  @ApiProperty({ required: false })
  complianceHours: number;

  @ApiProperty({ required: false })
  complianceLandings: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  disposition: string;

  @ApiProperty({ required: false })
  engineerSign: string;

  @ApiProperty({ required: true })
  idAircraft: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: true })
  idWorkCompleted: string;

  @ApiProperty({ required: false })
  inspectorSign: string;

  @ApiProperty({ required: false })
  intervalDays: number;

  @ApiProperty({ required: false })
  intervalHours: number;

  @ApiProperty({ required: false })
  intervalLandings: number;

  @ApiProperty({ required: false })
  intervalMonths: number;

  @ApiProperty({ required: false })
  itemType: string;

  @ApiProperty({ required: false })
  location: string;

  @ApiProperty({ required: false })
  nextDueDate: string;

  @ApiProperty({ required: false })
  nextDueHours: number;

  @ApiProperty({ required: false })
  nextDueLandings: number;

  @ApiProperty({ required: false })
  reference: string;

  @ApiProperty({ required: false })
  regularNotes: string;

  @ApiProperty({ required: false })
  releaseStatement: string;

  @ApiProperty({ required: false })
  remarks: string;

  @ApiProperty({ required: false })
  requirementType: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: true })
  workCompletedNumber: string;

  @ApiProperty({ required: false })
  workSummary: string;
}
