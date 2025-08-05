import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsStoreTransferItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  idEngineerPmtrItem: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idStoreTransfer: string;

  @ApiProperty({ required: true })
  idStoreTransferItem: string;

  @ApiProperty({ required: false })
  newBin: string;

  @ApiProperty({ required: false })
  noteItemTransfer: string;

  @ApiProperty({ required: false })
  oldIdPart: string;

  @ApiProperty({ required: false })
  qtyTransfer: number;

  @ApiProperty({ required: false })
  statusItem: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
