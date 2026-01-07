import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganInvoiceDto {
  @ApiProperty({ required: true })
  idInvoice: string;

  @ApiProperty({ required: false })
  formModule: string;

  @ApiProperty({ required: false })
  fromModuleId: string;

  @ApiProperty({ required: false })
  nomorInvoice: string;

  @ApiProperty({ required: false })
  nomorFaktur: string;

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
  statusPembayaran: string;

  @ApiProperty({ required: false })
  npwp: string;

  @ApiProperty({ required: false })
  billTujuan: string;

  @ApiProperty({ required: false })
  alamatPenagihan: string;

  @ApiProperty({ required: false })
  picPenagihan: string;

  @ApiProperty({ required: false })
  picPenagihanPhone: string;

  @ApiProperty({ required: false })
  tanggalTerbit: string;

  @ApiProperty({ required: false })
  jatuhTempo: number;

  @ApiProperty({ required: false })
  tanggalDibayar: string;

  @ApiProperty({ required: false })
  metodePembayaran: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  rekening: string;

  @ApiProperty({ required: false })
  topCatatan: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idClient: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  amountPaid: number;

  @ApiProperty({ required: false })
  remainingAmount: number;
}
