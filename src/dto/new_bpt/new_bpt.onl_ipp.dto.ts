import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIppDto {
  @ApiProperty({ required: true })
  akta: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpp: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  kapasitasParkir: string;

  @ApiProperty({ required: true })
  luasParkir: string;

  @ApiProperty({ required: true })
  rekom1: string;
}
