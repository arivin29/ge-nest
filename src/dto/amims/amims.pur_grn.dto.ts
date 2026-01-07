import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurGrnDto {
  @ApiProperty({ required: true })
  idPurGrn: string;

  @ApiProperty({ required: false })
  idPurVendor: string;

  @ApiProperty({ required: false })
  numberGrn: string;

  @ApiProperty({ required: false })
  dateGrn: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  grnKe: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  noIndex: number;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  noteGrn: string;

  @ApiProperty({ required: false })
  dateQa: string;

  @ApiProperty({ required: false })
  dateQaClose: string;
}
