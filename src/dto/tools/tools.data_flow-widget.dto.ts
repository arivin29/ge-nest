import { ApiProperty } from '@nestjs/swagger';
import { ToolsDataFlowDto } from './tools.data_flow.dto';

export class ToolsDataFlowWidgetDto extends ToolsDataFlowDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
