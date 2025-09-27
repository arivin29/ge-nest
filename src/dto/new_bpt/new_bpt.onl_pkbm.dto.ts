import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlPkbmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlPkbm: number; // PK

  @ApiProperty({ required: true })
  namaPkbm: string;

  @ApiProperty({ required: true })
  namaYayasan: string;

  @ApiProperty({ required: true })
  pemilik: string;
}
