import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpsmpswastaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpsmpswasta: number; // PK

  @ApiProperty({ required: true })
  namaLembaga: string;

  @ApiProperty({ required: true })
  namaYayasan: string;
}
