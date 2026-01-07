import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurPoItemDto {
  @ApiProperty({ required: true })
  idPurPoItem: string;

  @ApiProperty({ required: false })
  idPurPo: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  qtyPo: number;

  @ApiProperty({ required: false })
  price: number;

  @ApiProperty({ required: false })
  idPurPrItem: string;

  @ApiProperty({ required: false })
  notePoItem: string;

  @ApiProperty({ required: false })
  edd: number;

  @ApiProperty({ required: false })
  idEngineerRti: string;

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
  warantyStartCycle: number;

  @ApiProperty({ required: false })
  warantyStartDate: string;

  @ApiProperty({ required: false })
  warantyStartHours: number;

  @ApiProperty({ required: false })
  warantyStartDays: number;

  @ApiProperty({ required: false })
  idQaRpd: string;

  @ApiProperty({ required: false })
  priorityPoItem: string;

  @ApiProperty({ required: false })
  totalQtyGrn: number;

  @ApiProperty({ required: false })
  idPurPrcl: string;

  @ApiProperty({ required: false })
  oldPoItem: string;
}
