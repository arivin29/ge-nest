import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIprDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpr: number; // PK

  @ApiProperty({ required: true })
  jenisReklame: string;

  @ApiProperty({ required: true })
  lebar: number;

  @ApiProperty({ required: true })
  muka: number;

  @ApiProperty({ required: true })
  naskahReklame: string;

  @ApiProperty({ required: true })
  panjang: number;

  @ApiProperty({ required: true })
  statusLahan: string;

  @ApiProperty({ required: true })
  tinggi: number;
}
