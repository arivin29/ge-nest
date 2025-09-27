import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlLpksDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlLpks: number; // PK

  @ApiProperty({ required: true })
  jenisIzin: string;

  @ApiProperty({ required: true })
  kapasitas: string;
}
