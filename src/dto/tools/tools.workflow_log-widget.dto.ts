import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowLogDto } from './tools.workflow_log.dto';

export class ToolsWorkflowLogWidgetDto extends ToolsWorkflowLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
