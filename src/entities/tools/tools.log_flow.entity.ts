import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_flow', schema: 'erp_tools' })
export class ToolsLogFlow {
  @PrimaryColumn({ name: 'id_log' })
  idLog: string;

  @Column({ name: 'id_data_flow' })
  idDataFlow: string;

  @Column({ name: 'id_data_flow_detail' })
  idDataFlowDetail: string;

  @Column({ name: 'action_flow' })
  actionFlow: string;

  @Column({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'id_pegawai' })
  idPegawai: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
