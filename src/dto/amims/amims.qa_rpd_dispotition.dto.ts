import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsQaRpdDispotitionDto {
  @ApiProperty({ required: true })
  idQaRpdDispotition: string;

  @ApiProperty({ required: false })
  codeDispotition: string;

  @ApiProperty({ required: false })
  dispotition: string;

  @ApiProperty({ required: false })
  toPosition: string;

  @ApiProperty({ required: false })
  printTag: string;

  @ApiProperty({ required: false })
  color: string;
}
