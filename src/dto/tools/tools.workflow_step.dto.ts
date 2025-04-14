import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowStepDto {
  @ApiProperty({ required: true })
  idStep: string;

  @ApiProperty({ required: true })
  idWorkflow: string;

  @ApiProperty({ required: true })
  statusFrom: string;

  @ApiProperty({ required: true })
  statusTo: string;

  @ApiProperty({ required: true })
  urutan: number;

  @ApiProperty({ required: false })
  ruleJson: string;

  @ApiProperty({ required: false })
  triggerJson: string;

  @ApiProperty({ required: false })
  customCheckSql: string;

  @ApiProperty({ required: false })
  messageBefore: string;

  @ApiProperty({ required: false })
  statusRejectTo: string;

  @ApiProperty({ required: false })
  allowUserIds: string;

  @ApiProperty({ required: false })
  allowRoles: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
