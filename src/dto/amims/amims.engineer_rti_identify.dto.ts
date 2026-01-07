import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerRtiIdentifyDto {
  @ApiProperty({ required: true })
  idEngineerRtiIdentify: string;

  @ApiProperty({ required: false })
  idEngineerRti: string;

  @ApiProperty({ required: false })
  idPartInstall: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  parent: string;

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
  tsiCycle: number;

  @ApiProperty({ required: false })
  tsiHours: number;

  @ApiProperty({ required: false })
  tsiVar: string;

  @ApiProperty({ required: false })
  tsiVal: number;

  @ApiProperty({ required: false })
  warantyStartDate: string;

  @ApiProperty({ required: false })
  warantyStartHours: number;

  @ApiProperty({ required: false })
  warantyStartDays: number;

  @ApiProperty({ required: false })
  warantyStartCycle: number;

  @ApiProperty({ required: false })
  dateInstall: string;
}
