import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPositionDto {
  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: true })
  idPosition: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  position: string;
}
