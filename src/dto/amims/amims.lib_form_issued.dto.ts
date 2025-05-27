import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLibFormIssuedDto {
  @ApiProperty({ required: true })
  idLibFormIssued: string;

  @ApiProperty({ required: false })
  numberForm: string;

  @ApiProperty({ required: false })
  nameFile: string;

  @ApiProperty({ required: false })
  revision: string;

  @ApiProperty({ required: false })
  lastUpdate: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  numberW: string;
}
