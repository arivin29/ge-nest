import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow_step', schema: 'erp_tools' })
export class ToolsWorkflowStep {
  @PrimaryColumn({ name: 'id_step' })
  idStep: string;

  @Column({ name: 'id_workflow' })
  idWorkflow: string;

  @Column({ name: 'status_from' })
  statusFrom: string;

  @Column({ name: 'status_to' })
  statusTo: string;

  @Column({ name: 'urutan' })
  urutan: number;

  @Column({ name: 'rule_json' })
  ruleJson: string;

  @Column({ name: 'trigger_json' })
  triggerJson: string;

  @Column({ name: 'custom_check_sql' })
  customCheckSql: string;

  @Column({ name: 'message_before' })
  messageBefore: string;

  @Column({ name: 'status_reject_to' })
  statusRejectTo: string;

  @Column({ name: 'allow_user_ids' })
  allowUserIds: string;

  @Column({ name: 'allow_roles' })
  allowRoles: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
