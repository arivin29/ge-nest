import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurPrItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idMpcPiroItem: string;

  @ApiProperty({ required: false })
  idPurPr: string;

  @ApiProperty({ required: true })
  idPurPrItem: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  notePrItem: string;

  @ApiProperty({ required: false })
  oldPrItem: string;

  @ApiProperty({ required: false })
  priority: string;

  @ApiProperty({ required: false })
  qtyPr: number;

  @ApiProperty({ required: false })
  qtyStock: number;

  @ApiProperty({ required: false })
  statusItem: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
