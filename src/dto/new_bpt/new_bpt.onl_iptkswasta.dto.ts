import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIptkswastaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIptkswasta: number; // PK

  @ApiProperty({ required: true })
  namaLembaga: string;

  @ApiProperty({ required: true })
  namaYayasan: string;
}
