import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganBankAccountDto {
  @ApiProperty({ required: true })
  idBankAccount: string;

  @ApiProperty({ required: true })
  bankName: string;

  @ApiProperty({ required: false })
  branchName: string;

  @ApiProperty({ required: true })
  accountName: string;

  @ApiProperty({ required: true })
  accountNumber: string;

  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: true })
  coaIn: string;

  @ApiProperty({ required: true })
  coaOut: string;

  @ApiProperty({ required: false })
  bankCode: string;

  @ApiProperty({ required: false })
  swiftCode: string;

  @ApiProperty({ required: false })
  status: string;

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
