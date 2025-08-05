import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartConditionDto {
  @ApiProperty({ required: false })
  childnamePartCondition: string;

  @ApiProperty({ required: true })
  idPartCondition: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  partCondition: string;
}
