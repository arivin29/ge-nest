import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsDoctypeDto {
  @ApiProperty({ required: false })
  doctype: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: true })
  idDoctype: string;

  @ApiProperty({ required: false })
  childname: string;

  @ApiProperty({ required: false })
  lastupdatestamp: string;
}
