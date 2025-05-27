import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartConditionDto {
  @ApiProperty({ required: true })
  idPartCondition: string;

  @ApiProperty({ required: false })
  partCondition: string;

  @ApiProperty({ required: false })
  childnamePartCondition: string;

  @ApiProperty({ required: false })
  isDeleted: number;
}
