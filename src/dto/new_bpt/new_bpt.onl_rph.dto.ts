import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlRphDto {
  @ApiProperty({ required: true })
  campuran: string;

  @ApiProperty({ required: true })
  dewasa: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlRph: number; // PK

  @ApiProperty({ required: true })
  jenisTernak: string;

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  strain: string;
}
