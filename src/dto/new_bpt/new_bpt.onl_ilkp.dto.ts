import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIlkpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIlkp: number; // PK

  @ApiProperty({ required: true })
  namaLembaga: string;

  @ApiProperty({ required: true })
  namaYayasan: string;

  @ApiProperty({ required: true })
  pemilik: string;
}
