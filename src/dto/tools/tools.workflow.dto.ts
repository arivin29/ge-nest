import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinTipe: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idKantor: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idWorkflow: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  isDefault: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: true })
  namaWorkflow: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusField: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusWorkflow: string;

  @ApiProperty({ required: true })
  targetDb: string;

  @ApiProperty({ required: true })
  targetTable: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
