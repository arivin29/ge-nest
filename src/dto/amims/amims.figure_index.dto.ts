import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsFigureIndexDto {
  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  figureIndex: string;

  @ApiProperty({ required: false })
  idAta: string;

  @ApiProperty({ required: true })
  idFigureIndex: string;
}
