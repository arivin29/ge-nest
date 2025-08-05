import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechDiscrepanciesDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateDiscrepancies: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: true })
  idTechDiscrepancies: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  isDiscrepancies: string;

  @ApiProperty({ required: false })
  noteDiscrepancies: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
