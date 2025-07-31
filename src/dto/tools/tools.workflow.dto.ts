import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: true })
  idWorkflow: string;

  @ApiProperty({ required: false })
  isDefault: boolean;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: true })
  namaWorkflow: string;

  @ApiProperty({ required: false })
  statusWorkflow: string;

  @ApiProperty({ required: true })
  targetDb: string;

  @ApiProperty({ required: true })
  targetTable: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
