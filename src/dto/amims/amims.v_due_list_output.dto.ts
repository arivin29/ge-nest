import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsVDueListOutputDto {
  @ApiProperty({ required: false })
  atInstallCy: string;

  @ApiProperty({ required: false })
  atInstallDy: string;

  @ApiProperty({ required: false })
  atInstallHr: string;

  @ApiProperty({ required: false })
  ata: string;

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dueAtCy: string;

  @ApiProperty({ required: false })
  dueAtDy: string;

  @ApiProperty({ required: false })
  dueAtHr: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: true })
  idDueListOutput: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  lastPrice: number;

  @ApiProperty({ required: false })
  lastPriceCurrency: string;

  @ApiProperty({ required: false })
  noteDue: string;

  @ApiProperty({ required: false })
  partNumber: string;

  @ApiProperty({ required: false })
  partPrice: number;

  @ApiProperty({ required: false })
  peruntukan: string;

  @ApiProperty({ required: false })
  remainingCy: number;

  @ApiProperty({ required: false })
  remainingDy: number;

  @ApiProperty({ required: false })
  remainingHr: number;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  toDueCy: number;

  @ApiProperty({ required: false })
  toDueDy: number;

  @ApiProperty({ required: false })
  toDueHr: number;

  @ApiProperty({ required: false })
  typeDue: string;

  @ApiProperty({ required: false })
  typeOfwork: string;

  @ApiProperty({ required: false })
  variabel: string;
}
