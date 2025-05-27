import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganWorkScheduleBapDto {
  @ApiProperty({ required: true })
  idWorkScheduleBap: string;

  @ApiProperty({ required: true })
  idWorkSchedule: string;

  @ApiProperty({ required: false })
  idContract: string;

  @ApiProperty({ required: false })
  idContractSite: string;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: true })
  nomorBap: string;

  @ApiProperty({ required: true })
  tanggalMulai: string;

  @ApiProperty({ required: false })
  tanggalSelesai: string;

  @ApiProperty({ required: true })
  judulBap: string;

  @ApiProperty({ required: true })
  idClientContact: string;

  @ApiProperty({ required: false })
  lokasiPekerjaan: string;

  @ApiProperty({ required: false })
  uraianPekerjaan: string;

  @ApiProperty({ required: false })
  hasilPekerjaan: string;

  @ApiProperty({ required: false })
  pesanPelanggan: string;

  @ApiProperty({ required: false })
  keteranganTambahan: string;

  @ApiProperty({ required: false })
  statusWorkScheduleBap: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  approvedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
