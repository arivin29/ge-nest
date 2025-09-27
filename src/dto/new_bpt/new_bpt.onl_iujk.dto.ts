import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIujkDto {
  @ApiProperty({ required: true })
  bidangPekerjaan: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIujk: number; // PK

  @ApiProperty({ required: true })
  kegiatanUsaha: string;

  @ApiProperty({ required: true })
  klasifikasi: string;

  @ApiProperty({ required: true })
  kualifikasi: string;

  @ApiProperty({ required: true })
  namaPekerjaan: string;

  @ApiProperty({ required: true })
  nilaiPaketPekerjaan: number;

  @ApiProperty({ required: true })
  nomorSbu: string;

  @ApiProperty({ required: true })
  nomorTdp: string;

  @ApiProperty({ required: true })
  statusPerusahaan: string;

  @ApiProperty({ required: true })
  subBidangPekerjaan: string;

  @ApiProperty({ required: true })
  tahun: string;
}
