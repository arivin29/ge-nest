import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowDto } from './tools.workflow.dto';

export class ToolsWorkflowWidgetDto extends ToolsWorkflowDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
