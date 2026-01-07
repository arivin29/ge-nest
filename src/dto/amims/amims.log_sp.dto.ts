import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLogSpDto {
  @ApiProperty({ required: true })
  idLogSp: string;

  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
  sp: string;

  @ApiProperty({ required: false })
  param1: string;

  @ApiProperty({ required: false })
  param2: string;

  @ApiProperty({ required: false })
  desk: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  hasId: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  dateClose: string;
}
