import { ToolsDataFlow } from './tools.data_flow.entity';
import { ToolsDataFlowDetail } from './tools.data_flow_detail.entity';
import { ToolsDataFlowLog } from './tools.data_flow_log.entity';
import { ToolsLogFlow } from './tools.log_flow.entity';
import { ToolsMasterNotifikasi } from './tools.master_notifikasi.entity';
import { ToolsNotifikasi } from './tools.notifikasi.entity';
import { ToolsWorkflow } from './tools.workflow.entity';
import { ToolsWorkflowLog } from './tools.workflow_log.entity';
import { ToolsWorkflowStep } from './tools.workflow_step.entity';

export const ToolsEntities = [
  ToolsDataFlow,
  ToolsDataFlowDetail,
  ToolsDataFlowLog,
  ToolsLogFlow,
  ToolsMasterNotifikasi,
  ToolsNotifikasi,
  ToolsWorkflow,
  ToolsWorkflowLog,
  ToolsWorkflowStep
];

export * from './tools.data_flow.entity';
export * from './tools.data_flow_detail.entity';
export * from './tools.data_flow_log.entity';
export * from './tools.log_flow.entity';
export * from './tools.master_notifikasi.entity';
export * from './tools.notifikasi.entity';
export * from './tools.workflow.entity';
export * from './tools.workflow_log.entity';
export * from './tools.workflow_step.entity';
