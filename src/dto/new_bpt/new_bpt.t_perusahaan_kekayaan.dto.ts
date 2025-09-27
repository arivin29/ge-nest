import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanKekayaanDto {
  @ApiProperty({ required: true })
  asing: number;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanKekayaan: number; // PK

  @ApiProperty({ required: true })
  nasional: number;

  @ApiProperty({ required: true })
  nilaiKekayaan: number;

  @ApiProperty({ required: true })
  nilaiSaham: number;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
