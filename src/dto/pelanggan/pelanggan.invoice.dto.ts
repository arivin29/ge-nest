import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganInvoiceDto {
  @ApiProperty({ required: true })
  idInvoice: string;

  @ApiProperty({ required: false })
  idContract: string;

  @ApiProperty({ required: false })
  nomorInvoice: string;

  @ApiProperty({ required: false })
  periode: string;

  @ApiProperty({ required: false })
  jenisInvoice: string;

  @ApiProperty({ required: false })
  dpp: number;

  @ApiProperty({ required: false })
  ppn: number;

  @ApiProperty({ required: false })
  nilaiInvoice: number;

  @ApiProperty({ required: false })
  statusInvoice: string;

  @ApiProperty({ required: false })
  npwp: string;

  @ApiProperty({ required: false })
  alamatPenagihan: string;

  @ApiProperty({ required: false })
  picPenagihan: string;

  @ApiProperty({ required: false })
  tanggalTerbit: string;

  @ApiProperty({ required: false })
  tanggalJatuhTempo: string;

  @ApiProperty({ required: false })
  tanggalDibayar: string;

  @ApiProperty({ required: false })
  metodePembayaran: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
