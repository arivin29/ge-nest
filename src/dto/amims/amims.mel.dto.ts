import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMelDto {
  @ApiProperty({ required: false })
  day: number;

  @ApiProperty({ required: false })
  descriptionMel: string;

  @ApiProperty({ required: true })
  idMel: string;

  @ApiProperty({ required: false })
  mel: string;
}
