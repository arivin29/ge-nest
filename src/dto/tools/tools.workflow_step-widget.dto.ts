import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowStepDto } from './tools.workflow_step.dto';

export class ToolsWorkflowStepWidgetDto extends ToolsWorkflowStepDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
