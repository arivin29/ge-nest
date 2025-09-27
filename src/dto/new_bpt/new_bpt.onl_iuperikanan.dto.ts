import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIuperikananDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIuperikanan: number; // PK

  @ApiProperty({ required: true })
  jenisKegiatan: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
