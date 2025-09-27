import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDocumentNumberingCounterDto {
  @ApiProperty({ required: false })
  @IsOptional()
  bulan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModule: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModuleId: string;

  @ApiProperty({ required: true })
  idDocumentNumbering: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idDocumentNumberingCounter: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idKantor: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lastNumber: number;

  @ApiProperty({ required: true })
  tahun: number;

  @ApiProperty({ required: false })
  @IsOptional()
  targetColumn: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
