import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow_step', schema: 'erp_tools' })
export class ToolsWorkflowStep {
  @PrimaryColumn({ name: 'id_workflow_step' })
  idWorkflowStep: string;

  @Column({ name: 'id_workflow' })
  idWorkflow: string;

  @Column({ name: 'status_from' })
  statusFrom: string;

  @Column({ name: 'status_to' })
  statusTo: string;

  @Column({ name: 'urutan' })
  urutan: number;

  @Column({ name: 'rule_json', nullable: true })
  ruleJson: string;

  @Column({ name: 'trigger_json', nullable: true })
  triggerJson: string;

  @Column({ name: 'custom_check_sql', nullable: true })
  customCheckSql: string;

  @Column({ name: 'message_before', nullable: true })
  messageBefore: string;

  @Column({ name: 'status_reject_to', nullable: true })
  statusRejectTo: string;

  @Column({ name: 'allow_user_ids', nullable: true })
  allowUserIds: string;

  @Column({ name: 'allow_roles', nullable: true })
  allowRoles: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
