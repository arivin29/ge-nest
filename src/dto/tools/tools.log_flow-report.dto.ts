import { ApiProperty } from '@nestjs/swagger';
import { ToolsLogFlowDto } from './tools.log_flow.dto';
import { ToolsDataFlowDto } from './tools.data_flow.dto';
import { ToolsDataFlowDetailDto } from './tools.data_flow_detail.dto';
import { ToolsUserDto } from './tools.user.dto';
import { ToolsPegawaiDto } from './tools.pegawai.dto';

export class ToolsLogFlowReportDto extends ToolsLogFlowDto {
  @ApiProperty({ type: ToolsDataFlowDto })
  dataFlow: ToolsDataFlowDto;

  @ApiProperty({ type: ToolsDataFlowDetailDto })
  dataFlowDetail: ToolsDataFlowDetailDto;

  @ApiProperty({ type: ToolsUserDto })
  user: ToolsUserDto;

  @ApiProperty({ type: ToolsPegawaiDto })
  pegawai: ToolsPegawaiDto;
}
