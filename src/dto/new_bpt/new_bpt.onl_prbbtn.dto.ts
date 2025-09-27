import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlPrbbtnDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlPrbbtn: number; // PK

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
