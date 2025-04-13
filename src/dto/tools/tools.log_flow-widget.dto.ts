import { ApiProperty } from '@nestjs/swagger';
import { ToolsLogFlowDto } from './tools.log_flow.dto';

export class ToolsLogFlowWidgetDto extends ToolsLogFlowDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
