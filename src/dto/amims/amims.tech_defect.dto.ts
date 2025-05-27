import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechDefectDto {
  @ApiProperty({ required: true })
  idTechDefect: string;

  @ApiProperty({ required: false })
  idPartInstall: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  dateDefect: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  doneCycle: number;

  @ApiProperty({ required: false })
  doneHours: number;

  @ApiProperty({ required: false })
  doneDate: string;

  @ApiProperty({ required: false })
  statusDefect: string;

  @ApiProperty({ required: false })
  userSign: string;

  @ApiProperty({ required: false })
  noteDefect: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idEngineerRti: string;
}
