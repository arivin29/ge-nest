import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganClientSiteDto {
  @ApiProperty({ required: true })
  idClientSite: string;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: false })
  namaSite: string;

  @ApiProperty({ required: false })
  alamat: string;

  @ApiProperty({ required: false })
  kota: string;

  @ApiProperty({ required: false })
  provinsi: string;

  @ApiProperty({ required: false })
  kodePos: string;

  @ApiProperty({ required: false })
  kategoriSite: string;

  @ApiProperty({ required: false })
  tagSite: string;

  @ApiProperty({ required: false })
  latitude: number;

  @ApiProperty({ required: false })
  longitude: number;

  @ApiProperty({ required: false })
  isAktif: boolean;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
