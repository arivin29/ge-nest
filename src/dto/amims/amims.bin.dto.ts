import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsBinDto {
  @ApiProperty({ required: false })
  bin: string;

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: true })
  idBin: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
