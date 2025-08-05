import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartInstallDto {
  @ApiProperty({ required: false })
  bin: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateInstall: string;

  @ApiProperty({ required: false })
  dueOverhaulC: number;

  @ApiProperty({ required: false })
  dueOverhaulH: number;

  @ApiProperty({ required: false })
  dueOverhaulValue: number;

  @ApiProperty({ required: false })
  figureIndex: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  idEngineerPrisItem: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: true })
  idPartInstall: string;

  @ApiProperty({ required: false })
  installedOverhaulC: number;

  @ApiProperty({ required: false })
  installedOverhaulH: number;

  @ApiProperty({ required: false })
  installedOverhaulValue: number;

  @ApiProperty({ required: false })
  installedParentC: number;

  @ApiProperty({ required: false })
  installedParentH: number;

  @ApiProperty({ required: false })
  installedParentValue: number;

  @ApiProperty({ required: false })
  installedTsnC: number;

  @ApiProperty({ required: false })
  installedTsnH: number;

  @ApiProperty({ required: false })
  isfeatured: string;

  @ApiProperty({ required: false })
  itemIndex: string;

  @ApiProperty({ required: false })
  newParen: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  oldIdPart: string;

  @ApiProperty({ required: false })
  oldParent: string;

  @ApiProperty({ required: false })
  onPris: string;

  @ApiProperty({ required: false })
  parent: string;

  @ApiProperty({ required: false })
  qtyInstall: number;

  @ApiProperty({ required: false })
  refTechLog: string;

  @ApiProperty({ required: false })
  statusInstall: string;

  @ApiProperty({ required: false })
  topParent: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
