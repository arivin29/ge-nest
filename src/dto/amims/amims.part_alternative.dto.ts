import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartAlternativeDto {
  @ApiProperty({ required: false })
  forMpart: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: true })
  idPartAlternative: string;
}
