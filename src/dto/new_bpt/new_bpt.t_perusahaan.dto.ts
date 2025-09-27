import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanDto {
  @ApiProperty({ required: true })
  aktif: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  alamat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  desa: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  fax: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKabkot: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKec: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKel: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaan: number; // PK

  @ApiProperty({ required: true })
  idPerusahaanBadanUsaha: number;

  @ApiProperty({ required: true })
  idPerusahaanBidangUsaha: number;

  @ApiProperty({ required: true })
  idPerusahaanSumberModal: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idProv: string;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  investasi: number;

  @ApiProperty({ required: true })
  kodePos: number;

  @ApiProperty({ required: false })
  @IsOptional()
  merkUsaha: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  npp: string;

  @ApiProperty({ required: true })
  npwp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pimpinan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  profile: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rw: string;

  @ApiProperty({ required: true })
  skala: string;

  @ApiProperty({ required: true })
  source: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: true })
  telepon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglInput: string;

  @ApiProperty({ required: true })
  tkapria: number;

  @ApiProperty({ required: true })
  tkawanita: number;

  @ApiProperty({ required: true })
  tkipria: number;

  @ApiProperty({ required: true })
  tkiwanita: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: true })
  web: string;
}
