import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPositionDto {
  @ApiProperty({ required: true })
  idPosition: string;

  @ApiProperty({ required: false })
  position: string;

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  description: string;
}
