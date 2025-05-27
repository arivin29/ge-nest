import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsQaRpdDto {
  @ApiProperty({ required: true })
  idQaRpd: string;

  @ApiProperty({ required: false })
  idUserQa: string;

  @ApiProperty({ required: false })
  numberRpd: string;

  @ApiProperty({ required: false })
  dateRpd: string;

  @ApiProperty({ required: false })
  statusRpd: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  tipe: string;
}
