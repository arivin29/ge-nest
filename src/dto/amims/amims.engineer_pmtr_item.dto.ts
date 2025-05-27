import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPmtrItemDto {
  @ApiProperty({ required: true })
  idEngineerPmtrItem: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  qtyPmtr: number;

  @ApiProperty({ required: false })
  noteItemPmtr: string;

  @ApiProperty({ required: false })
  priority: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idEngineerPmtr: string;

  @ApiProperty({ required: false })
  figureIndex: string;
}
