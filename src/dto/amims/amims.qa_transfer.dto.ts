import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsQaTransferDto {
  @ApiProperty({ required: true })
  idQaTransfer: string;

  @ApiProperty({ required: false })
  toSite: number;

  @ApiProperty({ required: false })
  dateTransfer: string;

  @ApiProperty({ required: false })
  statusTransfer: string;

  @ApiProperty({ required: false })
  dateReceived: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idUserReceived: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  noteTransfer: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  numberTransfer: string;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  typeTransfer: string;
}
