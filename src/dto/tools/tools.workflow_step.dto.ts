import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowStepDto {
  @ApiProperty({ required: false })
  @IsOptional()
  allowRoles: string;

  @ApiProperty({ required: false })
  @IsOptional()
  allowUserIds: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  customCheckSql: string;

  @ApiProperty({ required: true })
  idWorkflow: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idWorkflowStep: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  messageBefore: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ruleJson: string;

  @ApiProperty({ required: true })
  statusFrom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusRejectTo: number;

  @ApiProperty({ required: true })
  statusTo: string;

  @ApiProperty({ required: false })
  @IsOptional()
  triggerJson: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: true })
  urutan: number;
}
