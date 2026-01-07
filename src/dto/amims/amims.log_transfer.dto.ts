import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLogTransferDto {
  @ApiProperty({ required: true })
  idLogTransfer: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  fromIdPart: string;

  @ApiProperty({ required: false })
  toIdPart: string;

  @ApiProperty({ required: false })
  issingle: string;

  @ApiProperty({ required: false })
  fromSite: string;

  @ApiProperty({ required: false })
  toSite: number;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  dateTransfer: string;

  @ApiProperty({ required: false })
  idUser: string;
}
