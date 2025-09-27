import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanKegiatanDto {
  @ApiProperty({ required: true })
  barang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanKegiatan: number; // PK

  @ApiProperty({ required: true })
  kegiatanUsaha: string;

  @ApiProperty({ required: true })
  kelembagaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
