import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsStoreTransferDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateReceived: string;

  @ApiProperty({ required: false })
  dateTransfer: string;

  @ApiProperty({ required: false })
  dimention: string;

  @ApiProperty({ required: false })
  idEngineerPmtr: string;

  @ApiProperty({ required: true })
  idStoreTransfer: string;

  @ApiProperty({ required: false })
  idUserReceived: string;

  @ApiProperty({ required: false })
  idUserTransfer: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  noOfBox: string;

  @ApiProperty({ required: false })
  noteTransfer: string;

  @ApiProperty({ required: false })
  numberTransfer: string;

  @ApiProperty({ required: false })
  sheet: string;

  @ApiProperty({ required: false })
  shippingVia: string;

  @ApiProperty({ required: false })
  statusTransfer: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  weight: string;
}
