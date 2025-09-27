import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIlksDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIlks: number; // PK

  @ApiProperty({ required: true })
  klasifikasiLab: string;

  @ApiProperty({ required: true })
  namaLab: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tenagaAnalis: string;
}
