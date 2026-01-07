import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsFigureIndexDto {
  @ApiProperty({ required: true })
  idFigureIndex: string;

  @ApiProperty({ required: false })
  idAta: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  figureIndex: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
