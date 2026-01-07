import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartidDto {
  @ApiProperty({ required: true })
  idPartid: string;

  @ApiProperty({ required: false })
  partid: string;

  @ApiProperty({ required: false })
  childnamePartid: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  issingle: string;
}
