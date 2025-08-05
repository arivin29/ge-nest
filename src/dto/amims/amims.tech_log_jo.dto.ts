import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechLogJoDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateClose: string;

  @ApiProperty({ required: false })
  idMpcJo: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  idTechLogClose: string;

  @ApiProperty({ required: true })
  idTechLogJo: string;

  @ApiProperty({ required: false })
  isContinue: string;

  @ApiProperty({ required: false })
  timeClose: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
