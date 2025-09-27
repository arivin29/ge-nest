import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIujkDto {
  @ApiProperty({ required: true })
  bidangPekerjaan: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIujk: number; // PK

  @ApiProperty({ required: true })
  kegiatanUsaha: string;

  @ApiProperty({ required: true })
  klasifikasi: string;

  @ApiProperty({ required: true })
  kualifikasi: string;

  @ApiProperty({ required: true })
  nama1: string;

  @ApiProperty({ required: true })
  nama2: string;

  @ApiProperty({ required: true })
  nama3: string;

  @ApiProperty({ required: true })
  namaPekerjaan: string;

  @ApiProperty({ required: true })
  namapenanggungjawab: string;

  @ApiProperty({ required: true })
  nilaiPaketPekerjaan: string;

  @ApiProperty({ required: true })
  no: number;

  @ApiProperty({ required: true })
  noBelakang: string;

  @ApiProperty({ required: true })
  nomorSbu: string;

  @ApiProperty({ required: true })
  nomorTdp: string;

  @ApiProperty({ required: true })
  pjt: string;

  @ApiProperty({ required: true })
  statusPerusahaan: string;

  @ApiProperty({ required: true })
  subBidangPekerjaan: string;

  @ApiProperty({ required: true })
  tahun: string;
}
