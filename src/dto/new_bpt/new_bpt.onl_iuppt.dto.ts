import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIupptDto {
  @ApiProperty({ required: true })
  ho: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIuppt: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  luas: string;

  @ApiProperty({ required: true })
  status: string;
}
