import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanKontakDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  hp: string;

  @ApiProperty({ required: true })
  idPemohonHubungan: number;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanKontak: number; // PK

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  tlpn: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
