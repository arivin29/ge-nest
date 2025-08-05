import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcJoOperatorDto {
  @ApiProperty({ required: false })
  idMpcJo: string;

  @ApiProperty({ required: true })
  idMpcJoOperator: string;

  @ApiProperty({ required: false })
  idOperator: string;

  @ApiProperty({ required: false })
  jobDesc: string;

  @ApiProperty({ required: false })
  operator: string;

  @ApiProperty({ required: false })
  position: string;
}
