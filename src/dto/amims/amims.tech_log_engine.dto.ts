import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTechLogEngineDto {
  @ApiProperty({ required: true })
  idTechLogEngine: string;

  @ApiProperty({ required: false })
  idTechLog: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  cycleBf: number;

  @ApiProperty({ required: false })
  hoursBf: number;

  @ApiProperty({ required: false })
  cycleFlight: number;

  @ApiProperty({ required: false })
  hoursFlight: number;

  @ApiProperty({ required: false })
  oil: string;

  @ApiProperty({ required: false })
  oilAdd: number;

  @ApiProperty({ required: false })
  oilTotal: number;

  @ApiProperty({ required: false })
  hoursCf: number;

  @ApiProperty({ required: false })
  cycleCf: number;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  fullCycleBf: number;

  @ApiProperty({ required: false })
  fullCycleFlt: number;

  @ApiProperty({ required: false })
  partCycleBf: number;

  @ApiProperty({ required: false })
  partCycleFlt: number;

  @ApiProperty({ required: false })
  timeAboveBf: number;

  @ApiProperty({ required: false })
  timeAboveFlt: number;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  n1: number;

  @ApiProperty({ required: false })
  n2: number;
}
