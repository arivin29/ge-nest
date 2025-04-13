import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganFakturDto {
  @ApiProperty({ required: true })
  idFaktur: string;

  @ApiProperty({ required: true })
  idInvoice: string;

  @ApiProperty({ required: false })
  versiFaktur: number;

  @ApiProperty({ required: false })
  nomorFaktur: string;

  @ApiProperty({ required: false })
  tanggalFaktur: string;

  @ApiProperty({ required: false })
  nilaiFaktur: number;

  @ApiProperty({ required: false })
  statusPembayaran: string;

  @ApiProperty({ required: false })
  tanggalPembayaran: string;

  @ApiProperty({ required: false })
  metodePembayaran: string;

  @ApiProperty({ required: false })
  nomorReferensiPembayaran: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  fileFakturUrl: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
