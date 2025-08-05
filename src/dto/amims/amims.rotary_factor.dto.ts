import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsRotaryFactorDto {
  @ApiProperty({ required: false })
  adj1: number;

  @ApiProperty({ required: false })
  adj2: number;

  @ApiProperty({ required: false })
  adj3: number;

  @ApiProperty({ required: false })
  dateCycle: string;

  @ApiProperty({ required: false })
  dateHours: string;

  @ApiProperty({ required: false })
  factor1: number;

  @ApiProperty({ required: false })
  factor2: number;

  @ApiProperty({ required: false })
  factor3: number;

  @ApiProperty({ required: false })
  hoistLeft: number;

  @ApiProperty({ required: false })
  hoistRight: number;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: true })
  idRotaryFactor: string;

  @ApiProperty({ required: false })
  noteHours: string;

  @ApiProperty({ required: false })
  noteRotaryFactor: string;

  @ApiProperty({ required: false })
  revisionCycle: string;

  @ApiProperty({ required: false })
  revisionHours: string;

  @ApiProperty({ required: false })
  rumusCycle: string;

  @ApiProperty({ required: false })
  rumusHours: string;
}
