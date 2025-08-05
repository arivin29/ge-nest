import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartActypeDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  idActype: string;

  @ApiProperty({ required: false })
  idActypeOld: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: true })
  idPartActype: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
