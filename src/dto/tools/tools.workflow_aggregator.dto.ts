import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsWorkflowAggregatorDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  fromModule: string;

  @ApiProperty({ required: true })
  fromModuleId: string;

  @ApiProperty({ required: true })
  idWorkflow: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idWorkflowAggregator: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  lastApprovalDate: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lastApprovalNote: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lastApprovalStatus: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lastApprovalUser: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lastWorkflowStep: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
