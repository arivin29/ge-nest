import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowAggregatorDto } from './tools.workflow_aggregator.dto';
import { ToolsWorkflowDto } from './tools.workflow.dto';

export class ToolsWorkflowAggregatorReportDto extends ToolsWorkflowAggregatorDto {
  @ApiProperty({ type: ToolsWorkflowDto })
  workflow: ToolsWorkflowDto;
}
