import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow_aggregator', schema: 'erp_tools' })
export class ToolsWorkflowAggregator {
  @PrimaryColumn({ name: 'id_workflow_aggregator' })
  idWorkflowAggregator: string;

  @Column({ name: 'from_module' })
  fromModule: string;

  @Column({ name: 'from_module_id' })
  fromModuleId: string;

  @Column({ name: 'id_workflow' })
  idWorkflow: string;

  @Column({ name: 'last_workflow_step', nullable: true })
  lastWorkflowStep: string;

  @Column({ name: 'last_approval_note', nullable: true })
  lastApprovalNote: string;

  @Column({ name: 'last_approval_user', nullable: true })
  lastApprovalUser: string;

  @Column({ name: 'last_approval_date', nullable: true })
  lastApprovalDate: string;

  @Column({ name: 'last_approval_status', nullable: true })
  lastApprovalStatus: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
