import { ApiProperty } from '@nestjs/swagger';
import { ToolsDataFlowLogDto } from './tools.data_flow_log.dto';

export class ToolsDataFlowLogWidgetDto extends ToolsDataFlowLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
