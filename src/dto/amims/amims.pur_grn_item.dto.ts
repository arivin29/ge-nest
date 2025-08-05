import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurGrnItemDto {
  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idPurGrn: string;

  @ApiProperty({ required: true })
  idPurGrnItem: string;

  @ApiProperty({ required: false })
  idPurPoItem: string;

  @ApiProperty({ required: false })
  noteGrnItem: string;

  @ApiProperty({ required: false })
  qtyGrn: number;

  @ApiProperty({ required: false })
  serialNumber: string;

  @ApiProperty({ required: false })
  statusGrn: string;
}
