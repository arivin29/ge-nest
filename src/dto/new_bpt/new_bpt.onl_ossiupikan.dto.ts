import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssiupikanDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssiupikan: number; // PK

  @ApiProperty({ required: true })
  jenisKegiatan: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
