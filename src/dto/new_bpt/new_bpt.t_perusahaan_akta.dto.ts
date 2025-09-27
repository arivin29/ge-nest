import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanAktaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanAkta: number; // PK

  @ApiProperty({ required: true })
  idPerusahaanAktaTipe: number;

  @ApiProperty({ required: true })
  no: string;

  @ApiProperty({ required: true })
  noPengesahan: string;

  @ApiProperty({ required: true })
  notaris: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tanggalPengesahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
