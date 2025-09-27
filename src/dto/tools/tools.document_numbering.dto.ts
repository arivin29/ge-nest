import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsDocumentNumberingDto {
  @ApiProperty({ required: false })
  @IsOptional()
  allowManualEntry: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  allowedRoles: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  digitNomor: number;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: true })
  formatNomor: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idDocumentNumbering: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  isActive: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  label: string;

  @ApiProperty({ required: false })
  @IsOptional()
  resetPeriode: string;

  @ApiProperty({ required: true })
  targetColumn: string;

  @ApiProperty({ required: true })
  targetTable: string;

  @ApiProperty({ required: false })
  @IsOptional()
  triggerStage: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
