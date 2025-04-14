import { ApiProperty } from '@nestjs/swagger';
import { ToolsWorkflowStepDto } from './tools.workflow_step.dto';
import { ToolsWorkflowDto } from './tools.workflow.dto';

export class ToolsWorkflowStepReportDto extends ToolsWorkflowStepDto {
  @ApiProperty({ type: ToolsWorkflowDto })
  workflow: ToolsWorkflowDto;
}
