import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDocumentNumberingDto {
  @ApiProperty({ required: true })
  idDocumentNumbering: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: true })
  targetTable: string;

  @ApiProperty({ required: true })
  targetColumn: string;

  @ApiProperty({ required: false })
  label: string;

  @ApiProperty({ required: true })
  formatNomor: string;

  @ApiProperty({ required: false })
  digitNomor: number;

  @ApiProperty({ required: false })
  resetPeriode: string;

  @ApiProperty({ required: false })
  triggerStage: string;

  @ApiProperty({ required: false })
  allowManualEntry: boolean;

  @ApiProperty({ required: false })
  allowedRoles: string;

  @ApiProperty({ required: false })
  isActive: boolean;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
