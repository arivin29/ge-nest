import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartLogDto {
  @ApiProperty({ required: false })
  activity: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateLog: string;

  @ApiProperty({ required: false })
  fromModule: string;

  @ApiProperty({ required: false })
  idModule: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: true })
  idPartLog: string;

  @ApiProperty({ required: false })
  idPosition: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  numberModule: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  qtyLog: number;

  @ApiProperty({ required: false })
  statusOnInventory: string;

  @ApiProperty({ required: false })
  tboCycle: number;

  @ApiProperty({ required: false })
  tboHours: number;

  @ApiProperty({ required: false })
  tboVal: number;

  @ApiProperty({ required: false })
  tboVar: string;

  @ApiProperty({ required: false })
  toLocation: string;

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
}
