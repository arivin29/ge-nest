import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanKomoditasDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanKomoditas: number; // PK

  @ApiProperty({ required: true })
  jumlah: string;

  @ApiProperty({ required: true })
  kbli: number;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  satuan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
