import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartFigureIndexDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  figureIndex: string;

  @ApiProperty({ required: false })
  idAta: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: true })
  idPartFigureIndex: string;

  @ApiProperty({ required: false })
  itemIndex: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
