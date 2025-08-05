import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechLogEngineCheckDto {
  @ApiProperty({ required: false })
  alt: number;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  idTechLogEngine: string;

  @ApiProperty({ required: true })
  idTechLogEngineCheck: string;

  @ApiProperty({ required: false })
  itt: number;

  @ApiProperty({ required: false })
  n1: number;

  @ApiProperty({ required: false })
  n2: number;

  @ApiProperty({ required: false })
  nr: number;

  @ApiProperty({ required: false })
  oat: number;

  @ApiProperty({ required: false })
  oilPress: number;

  @ApiProperty({ required: false })
  oilTemp: number;

  @ApiProperty({ required: false })
  powerMargin: number;

  @ApiProperty({ required: false })
  speed: number;

  @ApiProperty({ required: false })
  t5: number;

  @ApiProperty({ required: false })
  torque: number;
}
