import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcPiroItemDto {
  @ApiProperty({ required: true })
  idMpcPiroItem: string;

  @ApiProperty({ required: false })
  idMpcPiro: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  noteItemPiro: string;

  @ApiProperty({ required: false })
  qtyPiro: number;

  @ApiProperty({ required: false })
  statusItem: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  priority: string;

  @ApiProperty({ required: false })
  forFigureIndex: string;
}
