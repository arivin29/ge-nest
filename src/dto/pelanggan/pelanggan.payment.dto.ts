import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPaymentDto {
  @ApiProperty({ required: true })
  idPayment: string;

  @ApiProperty({ required: true })
  paymentType: string;

  @ApiProperty({ required: false })
  fromModule: string;

  @ApiProperty({ required: false })
  fromModuleId: string;

  @ApiProperty({ required: false })
  fromModuleNumber: string;

  @ApiProperty({ required: true })
  nomorPayment: string;

  @ApiProperty({ required: false })
  referenceNumber: string;

  @ApiProperty({ required: true })
  tanggalPayment: string;

  @ApiProperty({ required: false })
  tanggalJatuhTempo: string;

  @ApiProperty({ required: true })
  jumlah: number;

  @ApiProperty({ required: false })
  totalInvoice: number;

  @ApiProperty({ required: false })
  sisaTagihan: number;

  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: false })
  exchangeRate: number;

  @ApiProperty({ required: false })
  metode: string;

  @ApiProperty({ required: false })
  idBankAccount: string;

  @ApiProperty({ required: false })
  coa: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  isReconciled: boolean;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  approvedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
