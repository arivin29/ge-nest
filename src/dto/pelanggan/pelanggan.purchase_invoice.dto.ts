import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPurchaseInvoiceDto {
  @ApiProperty({ required: false })
  amountPaid: number;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  grandTotal: number;

  @ApiProperty({ required: true })
  idClient: string;

  @ApiProperty({ required: true })
  idPurchaseInvoice: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  jenis: string;

  @ApiProperty({ required: true })
  nomorInvoice: string;

  @ApiProperty({ required: false })
  paymentStatus: string;

  @ApiProperty({ required: false })
  remainingAmount: number;

  @ApiProperty({ required: false })
  sisaTagihan: number;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: true })
  tanggalInvoice: string;

  @ApiProperty({ required: false })
  tanggalJatuhTempo: string;

  @ApiProperty({ required: false })
  totalDiskon: number;

  @ApiProperty({ required: false })
  totalHarga: number;

  @ApiProperty({ required: false })
  totalPajak: number;

  @ApiProperty({ required: false })
  updatedAt: string;
}
