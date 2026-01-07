import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsStockDto {
  @ApiProperty({ required: false })
  statusOnInventory: string;

  @ApiProperty({ required: true })
  idMpart: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  partNumber: string;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  unit: string;

  @ApiProperty({ required: false })
  mfigureIndex: string;

  @ApiProperty({ required: false })
  mitemIndex: string;

  @ApiProperty({ required: false })
  codeAta: string;

  @ApiProperty({ required: false })
  partid: string;

  @ApiProperty({ required: false })
  bin: string;
}
