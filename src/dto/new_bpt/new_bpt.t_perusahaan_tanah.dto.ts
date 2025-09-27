import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanTanahDto {
  @ApiProperty({ required: true })
  alamat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idKabkot: string;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true })
  idKel: string;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanTanah: number; // PK

  @ApiProperty({ required: true })
  idProv: string;

  @ApiProperty({ required: true })
  luas: string;

  @ApiProperty({ required: true })
  penggunaanSekarang: string;

  @ApiProperty({ required: true })
  rt: string;

  @ApiProperty({ required: true })
  rw: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sketsa: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
