import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLifeTimeLimitDto {
  @ApiProperty({ required: false })
  childnameLifeTimeLimit: string;

  @ApiProperty({ required: true })
  idLifeTimeLimit: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  lifeTimeLimit: string;
}
