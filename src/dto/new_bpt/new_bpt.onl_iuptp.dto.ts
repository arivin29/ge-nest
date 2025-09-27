import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIuptpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIuptp: number; // PK

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  tgl: string;
}
