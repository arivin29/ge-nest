import { ToolsCustomField } from './tools.custom_field.entity';
import { ToolsCustomFieldGroup } from './tools.custom_field_group.entity';
import { ToolsCustomFieldValue } from './tools.custom_field_value.entity';
import { ToolsDocumentNumbering } from './tools.document_numbering.entity';
import { ToolsDocumentNumberingCounter } from './tools.document_numbering_counter.entity';
import { ToolsMasterNotifikasi } from './tools.master_notifikasi.entity';
import { ToolsNotifikasi } from './tools.notifikasi.entity';
import { ToolsWorkflow } from './tools.workflow.entity';
import { ToolsWorkflowAggregator } from './tools.workflow_aggregator.entity';
import { ToolsWorkflowLog } from './tools.workflow_log.entity';
import { ToolsWorkflowStep } from './tools.workflow_step.entity';

export const ToolsEntities = [
  ToolsCustomField,
  ToolsCustomFieldGroup,
  ToolsCustomFieldValue,
  ToolsDocumentNumbering,
  ToolsDocumentNumberingCounter,
  ToolsMasterNotifikasi,
  ToolsNotifikasi,
  ToolsWorkflow,
  ToolsWorkflowAggregator,
  ToolsWorkflowLog,
  ToolsWorkflowStep
];

export * from './tools.custom_field.entity';
export * from './tools.custom_field_group.entity';
export * from './tools.custom_field_value.entity';
export * from './tools.document_numbering.entity';
export * from './tools.document_numbering_counter.entity';
export * from './tools.master_notifikasi.entity';
export * from './tools.notifikasi.entity';
export * from './tools.workflow.entity';
export * from './tools.workflow_aggregator.entity';
export * from './tools.workflow_log.entity';
export * from './tools.workflow_step.entity';
