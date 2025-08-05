import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLibReferenceDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  idLibReference: string;

  @ApiProperty({ required: false })
  lastUpdate: string;

  @ApiProperty({ required: false })
  nameFile: string;

  @ApiProperty({ required: false })
  numberReference: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
