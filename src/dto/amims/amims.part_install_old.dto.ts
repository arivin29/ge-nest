import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartInstallOldDto {
  @ApiProperty({ required: true })
  idPartInstallOld: string;

  @ApiProperty({ required: false })
  idPartInstall: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  parent: string;

  @ApiProperty({ required: false })
  dateInstall: string;

  @ApiProperty({ required: false })
  bin: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  installedOverhaulC: number;

  @ApiProperty({ required: false })
  installedOverhaulH: number;

  @ApiProperty({ required: false })
  installedOverhaulValue: number;

  @ApiProperty({ required: false })
  installedInspectionC: number;

  @ApiProperty({ required: false })
  installedInspectionH: number;

  @ApiProperty({ required: false })
  installedInspectionValue: number;

  @ApiProperty({ required: false })
  dueOverhaulC: number;

  @ApiProperty({ required: false })
  dueOverhaulH: number;

  @ApiProperty({ required: false })
  dueOverhaulValue: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  statusInstall: string;

  @ApiProperty({ required: false })
  isfeatured: string;

  @ApiProperty({ required: false })
  idEngineerPrisItem: string;

  @ApiProperty({ required: false })
  qtyInstall: number;

  @ApiProperty({ required: false })
  figureIndex: string;

  @ApiProperty({ required: false })
  itemIndex: string;

  @ApiProperty({ required: false })
  oldId: string;
}
