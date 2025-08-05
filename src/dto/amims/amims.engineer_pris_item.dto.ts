import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPrisItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  fromPart: string;

  @ApiProperty({ required: false })
  hashTechLog: string;

  @ApiProperty({ required: false })
  idEngineerPris: string;

  @ApiProperty({ required: true })
  idEngineerPrisItem: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idPartRemove: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  noteItemPris: string;

  @ApiProperty({ required: false })
  partOnDate: string;

  @ApiProperty({ required: false })
  qtyInstall: number;

  @ApiProperty({ required: false })
  qtyPris: number;

  @ApiProperty({ required: false })
  statusItem: string;

  @ApiProperty({ required: false })
  tsnCycle: number;

  @ApiProperty({ required: false })
  tsnHours: number;

  @ApiProperty({ required: false })
  tsnVal: number;

  @ApiProperty({ required: false })
  tsoCycle: number;

  @ApiProperty({ required: false })
  tsoHours: number;

  @ApiProperty({ required: false })
  tsoVal: number;

  @ApiProperty({ required: false })
  updatedAt: string;
}
