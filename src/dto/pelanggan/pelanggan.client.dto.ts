import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganClientDto {
  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: false })
  kodeClient: string;

  @ApiProperty({ required: false })
  jenisClient: string;

  @ApiProperty({ required: true })
  namaResmi: string;

  @ApiProperty({ required: false })
  namaFamiliar: string;

  @ApiProperty({ required: false })
  npwp: string;

  @ApiProperty({ required: false })
  emailPerusahaan: string;

  @ApiProperty({ required: false })
  telepon: string;

  @ApiProperty({ required: false })
  website: string;

  @ApiProperty({ required: false })
  alamat: string;

  @ApiProperty({ required: false })
  kota: string;

  @ApiProperty({ required: false })
  provinsi: string;

  @ApiProperty({ required: false })
  kodePos: string;

  @ApiProperty({ required: false })
  primaryPic: string;

  @ApiProperty({ required: false })
  logoUrl: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  isAktif: boolean;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
