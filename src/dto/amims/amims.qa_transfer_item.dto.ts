import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsQaTransferItemDto {
  @ApiProperty({ required: false })
  idMpcSelfMaintenance: string;

  @ApiProperty({ required: false })
  idPurPrcl: string;

  @ApiProperty({ required: false })
  idQaTransfer: string;

  @ApiProperty({ required: true })
  idQaTransferItem: string;
}
