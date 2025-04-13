import { ApiProperty } from '@nestjs/swagger';
import { ToolsDataFlowLogDto } from './tools.data_flow_log.dto';
import { ToolsDataFlowDto } from './tools.data_flow.dto';
import { ToolsDataFlowDetailDto } from './tools.data_flow_detail.dto';
import { ToolsUserDto } from './tools.user.dto';

export class ToolsDataFlowLogReportDto extends ToolsDataFlowLogDto {
  @ApiProperty({ type: ToolsDataFlowDto })
  dataFlow: ToolsDataFlowDto;

  @ApiProperty({ type: ToolsDataFlowDetailDto })
  dataFlowDetail: ToolsDataFlowDetailDto;

  @ApiProperty({ type: ToolsUserDto })
  user: ToolsUserDto;
}
