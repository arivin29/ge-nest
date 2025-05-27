import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsActypeDto {
  @ApiProperty({ required: true })
  idActype: string;

  @ApiProperty({ required: false })
  actype: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  numberEngine: number;

  @ApiProperty({ required: false })
  wingtype: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  acCategory: string;

  @ApiProperty({ required: false })
  engineType: string;

  @ApiProperty({ required: false })
  engineManufacture: string;

  @ApiProperty({ required: false })
  acManufacture: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  eStarts: string;

  @ApiProperty({ required: false })
  eFlight: string;

  @ApiProperty({ required: false })
  statusType: string;

  @ApiProperty({ required: false })
  hashN1: string;

  @ApiProperty({ required: false })
  hashN2: string;
}
