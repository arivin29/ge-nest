import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsDueListOutputDto {
  @ApiProperty({ required: true })
  idDueListOutput: string;

  @ApiProperty({ required: false })
  idDueList: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  noteDue: string;

  @ApiProperty({ required: false })
  partNumber: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  keyword: string;

  @ApiProperty({ required: false })
  ata: string;

  @ApiProperty({ required: false })
  sn: string;

  @ApiProperty({ required: false })
  typeOfwork: string;

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  typeDue: string;

  @ApiProperty({ required: false })
  dueH: number;

  @ApiProperty({ required: false })
  dueC: number;

  @ApiProperty({ required: false })
  dueT: number;

  @ApiProperty({ required: false })
  toDue: number;

  @ApiProperty({ required: false })
  atInstall: string;

  @ApiProperty({ required: false })
  dueAt: string;

  @ApiProperty({ required: false })
  currentPart: string;

  @ApiProperty({ required: false })
  installPart: string;

  @ApiProperty({ required: false })
  ramaining: number;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  variabel: string;

  @ApiProperty({ required: false })
  peruntukan: string;
}
