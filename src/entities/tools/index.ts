import { ToolsDataFlow } from './tools.data_flow.entity';
import { ToolsDataFlowDetail } from './tools.data_flow_detail.entity';
import { ToolsDataFlowLog } from './tools.data_flow_log.entity';
import { ToolsLogFlow } from './tools.log_flow.entity';
import { ToolsMasterNotifikasi } from './tools.master_notifikasi.entity';
import { ToolsNotifikasi } from './tools.notifikasi.entity';

export const ToolsEntities = [
  ToolsDataFlow,
  ToolsDataFlowDetail,
  ToolsDataFlowLog,
  ToolsLogFlow,
  ToolsMasterNotifikasi,
  ToolsNotifikasi
];

export * from './tools.data_flow.entity';
export * from './tools.data_flow_detail.entity';
export * from './tools.data_flow_log.entity';
export * from './tools.log_flow.entity';
export * from './tools.master_notifikasi.entity';
export * from './tools.notifikasi.entity';
