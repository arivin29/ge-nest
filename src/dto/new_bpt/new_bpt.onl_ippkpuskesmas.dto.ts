import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIppkpuskesmasDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIppkpuskesmas: number; // PK

  @ApiProperty({ required: true })
  klasifikasiKlinik: string;

  @ApiProperty({ required: true })
  namaApoteker: string;

  @ApiProperty({ required: true })
  namakes: string;

  @ApiProperty({ required: true })
  nomorApoteker: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  puskesmas: string;
}
