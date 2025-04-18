import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowLogDto } from './tools.workflow_log.dto';
import { ToolsWorkflowDto } from './tools.workflow.dto';

export class ToolsWorkflowLogReportDto extends ToolsWorkflowLogDto {
  @ApiProperty({ type: ToolsWorkflowDto })
  workflow: ToolsWorkflowDto;
}
