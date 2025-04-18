import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow_log', schema: 'erp_tools' })
export class ToolsWorkflowLog {
  @PrimaryColumn({ name: 'id_workflow_log' })
  idWorkflowLog: string;

  @Column({ name: 'id_workflow', nullable: true })
  idWorkflow: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'from_module_id' })
  fromModuleId: string;

  @Column({ name: 'id_workflow_step' })
  idWorkflowStep: string;

  @Column({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'nama_user', nullable: true })
  namaUser: string;

  @Column({ name: 'status_before', nullable: true })
  statusBefore: string;

  @Column({ name: 'status_after', nullable: true })
  statusAfter: string;

  @Column({ name: 'approved_by', nullable: true })
  approvedBy: string;

  @Column({ name: 'approved_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  approvedAt: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;
}
