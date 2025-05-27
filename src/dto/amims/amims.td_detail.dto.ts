import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTdDetailDto {
  @ApiProperty({ required: true })
  idTdDetail: string;

  @ApiProperty({ required: false })
  numberDetail: string;

  @ApiProperty({ required: false })
  dateDetail: string;

  @ApiProperty({ required: false })
  subject: string;

  @ApiProperty({ required: false })
  idTd: string;

  @ApiProperty({ required: false })
  idActype: string;

  @ApiProperty({ required: false })
  fileDetail: string;

  @ApiProperty({ required: false })
  noteDetail: string;

  @ApiProperty({ required: false })
  typeDetail: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  applicable: string;

  @ApiProperty({ required: false })
  statusTdDetail: string;

  @ApiProperty({ required: false })
  isQc: string;

  @ApiProperty({ required: false })
  isPilot: string;

  @ApiProperty({ required: false })
  isEngineer: string;

  @ApiProperty({ required: false })
  priority: string;

  @ApiProperty({ required: false })
  method: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  idAcc: string;

  @ApiProperty({ required: false })
  dateAcc: string;

  @ApiProperty({ required: false })
  idAccQa: string;

  @ApiProperty({ required: false })
  dateAccQa: string;
}
