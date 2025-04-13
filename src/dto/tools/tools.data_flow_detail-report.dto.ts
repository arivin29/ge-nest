import { ApiProperty } from '@nestjs/swagger';
import { ToolsDataFlowDetailDto } from './tools.data_flow_detail.dto';
import { ToolsDataFlowDto } from './tools.data_flow.dto';
import { ToolsPegawaiDto } from './tools.pegawai.dto';
import { ToolsJabatanDto } from './tools.jabatan.dto';

export class ToolsDataFlowDetailReportDto extends ToolsDataFlowDetailDto {
  @ApiProperty({ type: ToolsDataFlowDto })
  dataFlow: ToolsDataFlowDto;

  @ApiProperty({ type: ToolsPegawaiDto })
  pegawai: ToolsPegawaiDto;

  @ApiProperty({ type: ToolsJabatanDto })
  jabatan: ToolsJabatanDto;
}
