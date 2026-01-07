import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowAggregatorDto {
  @ApiProperty({ required: true })
  idWorkflowAggregator: string;

  @ApiProperty({ required: true })
  fromModule: string;

  @ApiProperty({ required: true })
  fromModuleId: string;

  @ApiProperty({ required: true })
  idWorkflow: string;

  @ApiProperty({ required: false })
  lastWorkflowStep: string;

  @ApiProperty({ required: false })
  lastApprovalNote: string;

  @ApiProperty({ required: false })
  lastApprovalUser: string;

  @ApiProperty({ required: false })
  lastApprovalDate: string;

  @ApiProperty({ required: false })
  lastApprovalStatus: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
