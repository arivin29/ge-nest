import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartDto {
  @ApiProperty({ required: false })
  bin: string;

  @ApiProperty({ required: false })
  certificationNo: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateOrder: string;

  @ApiProperty({ required: false })
  endOfLife: string;

  @ApiProperty({ required: false })
  firstInstallC: number;

  @ApiProperty({ required: false })
  firstInstallDate: string;

  @ApiProperty({ required: false })
  firstInstallH: number;

  @ApiProperty({ required: false })
  groupStatus: string;

  @ApiProperty({ required: false })
  idConditionMonitoring: string;

  @ApiProperty({ required: false })
  idCurrency: string;

  @ApiProperty({ required: false })
  idLifeTimeLimit: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: true })
  idPart: string;

  @ApiProperty({ required: false })
  idPartCondition: string;

  @ApiProperty({ required: false })
  idPurGrn: string;

  @ApiProperty({ required: false })
  idPurPoItem: string;

  @ApiProperty({ required: false })
  idPurPrcl: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idTypeOfwork: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idWarranty: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  lifeLimitCycle: number;

  @ApiProperty({ required: false })
  lifeLimitHours: number;

  @ApiProperty({ required: false })
  lifeLimitVal: number;

  @ApiProperty({ required: false })
  lifeLimitVar: string;

  @ApiProperty({ required: false })
  manufacture: string;

  @ApiProperty({ required: false })
  manufactureDate: string;

  @ApiProperty({ required: false })
  newFirstInstallH: number;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  oldParent: string;

  @ApiProperty({ required: false })
  partParent: string;

  @ApiProperty({ required: false })
  position: string;

  @ApiProperty({ required: false })
  price: number;

  @ApiProperty({ required: false })
  purchaseDate: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  startInstallC: number;

  @ApiProperty({ required: false })
  startInstallDate: string;

  @ApiProperty({ required: false })
  startInstallH: number;

  @ApiProperty({ required: false })
  statusOnInventory: string;

  @ApiProperty({ required: false })
  tbiCycle: number;

  @ApiProperty({ required: false })
  tbiHours: number;

  @ApiProperty({ required: false })
  tbiVal: number;

  @ApiProperty({ required: false })
  tbiVar: string;

  @ApiProperty({ required: false })
  tboCycle: number;

  @ApiProperty({ required: false })
  tboHours: number;

  @ApiProperty({ required: false })
  tboVal: number;

  @ApiProperty({ required: false })
  tboVar: string;

  @ApiProperty({ required: false })
  tempUse: number;

  @ApiProperty({ required: false })
  tsiCycle: number;

  @ApiProperty({ required: false })
  tsiHours: number;

  @ApiProperty({ required: false })
  tsiVal: number;

  @ApiProperty({ required: false })
  tsiVar: string;

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
  updatedAt: string;

  @ApiProperty({ required: false })
  useableStatus: string;

  @ApiProperty({ required: false })
  warrantyCycle: number;

  @ApiProperty({ required: false })
  warrantyDays: number;

  @ApiProperty({ required: false })
  warrantyHours: number;

  @ApiProperty({ required: false })
  warrantyStartCycle: number;

  @ApiProperty({ required: false })
  warrantyStartDate: string;

  @ApiProperty({ required: false })
  warrantyVal: number;

  @ApiProperty({ required: false })
  warrantyYears: number;
}
