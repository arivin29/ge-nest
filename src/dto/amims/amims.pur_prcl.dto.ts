import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurPrclDto {
  @ApiProperty({ required: false })
  airworthiness: string;

  @ApiProperty({ required: false })
  certificationNo: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  datePcrl: string;

  @ApiProperty({ required: false })
  datePur: string;

  @ApiProperty({ required: false })
  dateQa: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  draftBin: string;

  @ApiProperty({ required: false })
  idConditionMonitoring: string;

  @ApiProperty({ required: false })
  idCurrency: string;

  @ApiProperty({ required: false })
  idInternalGrnItem: string;

  @ApiProperty({ required: false })
  idLifeTimeLimit: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idPartCondition: string;

  @ApiProperty({ required: false })
  idPurGrn: string;

  @ApiProperty({ required: false })
  idPurGrnItem: string;

  @ApiProperty({ required: true })
  idPurPrcl: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: false })
  idUserPu: string;

  @ApiProperty({ required: false })
  idUserQa: string;

  @ApiProperty({ required: false })
  isServiceable: number;

  @ApiProperty({ required: false })
  lifeLimitCycle: number;

  @ApiProperty({ required: false })
  lifeLimitHours: number;

  @ApiProperty({ required: false })
  lifeLimitVal: number;

  @ApiProperty({ required: false })
  lifeLimitVar: string;

  @ApiProperty({ required: false })
  loopIndex: number;

  @ApiProperty({ required: false })
  manufacture: string;

  @ApiProperty({ required: false })
  manufactureDate: string;

  @ApiProperty({ required: false })
  notePcrl: string;

  @ApiProperty({ required: false })
  partCheckingPur: string;

  @ApiProperty({ required: false })
  partCheckingQa: string;

  @ApiProperty({ required: false })
  prclParent: string;

  @ApiProperty({ required: false })
  price: number;

  @ApiProperty({ required: false })
  qtyCheck: number;

  @ApiProperty({ required: false })
  qtyPrcl: number;

  @ApiProperty({ required: false })
  qtyReturn: number;

  @ApiProperty({ required: false })
  qualityCheck: string;

  @ApiProperty({ required: false })
  refDate: string;

  @ApiProperty({ required: false })
  refId: string;

  @ApiProperty({ required: false })
  refNumber: string;

  @ApiProperty({ required: false })
  service: string;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  statusPrcl: string;

  @ApiProperty({ required: false })
  tboCycle: number;

  @ApiProperty({ required: false })
  tboHours: number;

  @ApiProperty({ required: false })
  tboVal: number;

  @ApiProperty({ required: false })
  tboVar: string;

  @ApiProperty({ required: false })
  tsnCycle: number;

  @ApiProperty({ required: false })
  tsnHours: number;

  @ApiProperty({ required: false })
  tsnVal: number;

  @ApiProperty({ required: false })
  tsnVar: string;

  @ApiProperty({ required: false })
  tsoCycle: number;

  @ApiProperty({ required: false })
  tsoHours: number;

  @ApiProperty({ required: false })
  tsoVal: number;

  @ApiProperty({ required: false })
  tsoVar: string;

  @ApiProperty({ required: false })
  typePrcl: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  warrantyCycle: number;

  @ApiProperty({ required: false })
  warrantyDays: number;

  @ApiProperty({ required: false })
  warrantyHours: number;

  @ApiProperty({ required: false })
  warrantyMonths: number;

  @ApiProperty({ required: false })
  warrantyStartCycle: number;

  @ApiProperty({ required: false })
  warrantyStartDate: string;
}
