import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDocumentNumberingCounterDto {
  @ApiProperty({ required: true })
  idDocumentNumberingCounter: string;

  @ApiProperty({ required: true })
  idDocumentNumbering: string;

  @ApiProperty({ required: true })
  tahun: number;

  @ApiProperty({ required: false })
  bulan: number;

  @ApiProperty({ required: false })
  lastNumber: number;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: false })
  forModule: string;

  @ApiProperty({ required: false })
  forModuleId: string;

  @ApiProperty({ required: false })
  targetColumn: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  createdAt: string;
}
