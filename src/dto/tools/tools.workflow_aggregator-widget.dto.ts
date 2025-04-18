import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowAggregatorDto } from './tools.workflow_aggregator.dto';

export class ToolsWorkflowAggregatorWidgetDto extends ToolsWorkflowAggregatorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
