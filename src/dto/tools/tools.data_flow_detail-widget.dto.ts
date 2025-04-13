import { ApiProperty } from '@nestjs/swagger';
import { ToolsDataFlowDetailDto } from './tools.data_flow_detail.dto';

export class ToolsDataFlowDetailWidgetDto extends ToolsDataFlowDetailDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
