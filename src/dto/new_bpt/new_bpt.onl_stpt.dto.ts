import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlStptDto {
  @ApiProperty({ required: true })
  agama: string;

  @ApiProperty({ required: true })
  bahan: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlStpt: number; // PK

  @ApiProperty({ required: true })
  jenisPerawatan: string;

  @ApiProperty({ required: true })
  jk: string;

  @ApiProperty({ required: true })
  kewarganegaraan: string;

  @ApiProperty({ required: true })
  pekerjaan: string;

  @ApiProperty({ required: true })
  pendidikanFormal: string;
}
