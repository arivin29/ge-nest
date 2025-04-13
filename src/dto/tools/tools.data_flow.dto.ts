import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDataFlowDto {
  @ApiProperty({ required: true })
  idDataFlow: string;

  @ApiProperty({ required: false })
  forModule: string;

  @ApiProperty({ required: false })
  tabelName: string;

  @ApiProperty({ required: false })
  nameFlow: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  defaultStatus: string;

  @ApiProperty({ required: false })
  closeStatus: string;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: false })
  idDivisi: string;

  @ApiProperty({ required: false })
  idDepartemen: string;

  @ApiProperty({ required: false })
  idSection: string;

  @ApiProperty({ required: false })
  idJabatan: string;

  @ApiProperty({ required: false })
  dataFlowStatus: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  idUsers: string;
}
