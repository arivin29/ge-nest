import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpartDto {
  @ApiProperty({ required: true })
  idMpart: string;

  @ApiProperty({ required: false })
  parent: string;

  @ApiProperty({ required: false })
  partname: string;

  @ApiProperty({ required: false })
  childname: string;

  @ApiProperty({ required: false })
  idAta: string;

  @ApiProperty({ required: false })
  idPartid: string;

  @ApiProperty({ required: false })
  partNumber: string;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  descriptionMpart: string;

  @ApiProperty({ required: false })
  idGroup: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  statusMpart: string;

  @ApiProperty({ required: false })
  idPartCategory: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  unit: string;

  @ApiProperty({ required: false })
  ismayor: string;

  @ApiProperty({ required: false })
  mfigureIndex: string;

  @ApiProperty({ required: false })
  mitemIndex: string;

  @ApiProperty({ required: false })
  idLifeTimeLimit: string;

  @ApiProperty({ required: false })
  lifeLimitCycle: number;

  @ApiProperty({ required: false })
  lifeLimitHours: number;

  @ApiProperty({ required: false })
  lifeLimitVar: string;

  @ApiProperty({ required: false })
  lifeLimitVal: number;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  mat_82: string;

  @ApiProperty({ required: false })
  manufactureMpart: string;

  @ApiProperty({ required: false })
  calculatedCycle: string;

  @ApiProperty({ required: false })
  calculatedHours: string;

  @ApiProperty({ required: false })
  refMel: string;

  @ApiProperty({ required: false })
  isMandatory: string;

  @ApiProperty({ required: false })
  minQty: number;

  @ApiProperty({ required: false })
  oldAtachapter: string;

  @ApiProperty({ required: false })
  codeAtaMentah: string;

  @ApiProperty({ required: false })
  mtboCycle: number;

  @ApiProperty({ required: false })
  mtboHours: number;

  @ApiProperty({ required: false })
  mtboVal: number;

  @ApiProperty({ required: false })
  mtboVar: string;

  @ApiProperty({ required: false })
  forAc: number;

  @ApiProperty({ required: false })
  idConditionMonitoring: string;
}
