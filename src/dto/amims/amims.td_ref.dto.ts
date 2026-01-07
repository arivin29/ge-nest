import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTdRefDto {
  @ApiProperty({ required: true })
  idTdRef: string;

  @ApiProperty({ required: false })
  idTd: string;

  @ApiProperty({ required: false })
  idTdLain: string;

  @ApiProperty({ required: false })
  noTdLain: string;
}
