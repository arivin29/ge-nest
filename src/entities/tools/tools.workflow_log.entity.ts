import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow_log', schema: 'erp_tools' })
export class ToolsWorkflowLog {
  @PrimaryColumn({ name: 'id_log' })
  idLog: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'id_data' })
  idData: string;

  @Column({ name: 'id_step' })
  idStep: string;

  @Column({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'status_before' })
  statusBefore: string;

  @Column({ name: 'status_after' })
  statusAfter: string;

  @Column({ name: 'approved_by' })
  approvedBy: string;

  @Column({ name: 'approved_at' })
  approvedAt: string;

  @Column({ name: 'catatan' })
  catatan: string;
}
