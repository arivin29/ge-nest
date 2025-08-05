import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTdDto {
  @ApiProperty({ required: false })
  applicable: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  docNumber: string;

  @ApiProperty({ required: false })
  effectiveDate: string;

  @ApiProperty({ required: false })
  fileTd: string;

  @ApiProperty({ required: false })
  idDoctype: string;

  @ApiProperty({ required: true })
  idTd: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  noteDoc: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  rev: string;

  @ApiProperty({ required: false })
  tdParent: string;

  @ApiProperty({ required: false })
  title: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;
}
