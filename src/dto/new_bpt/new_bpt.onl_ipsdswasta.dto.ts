import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpsdswastaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpsdswasta: number; // PK

  @ApiProperty({ required: true })
  namaLembaga: string;

  @ApiProperty({ required: true })
  namaYayasan: string;
}
