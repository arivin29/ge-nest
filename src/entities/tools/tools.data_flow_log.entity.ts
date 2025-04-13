import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'data_flow_log', schema: 'erp_tools' })
export class ToolsDataFlowLog {
  @PrimaryColumn({ name: 'id_data_flow_log' })
  idDataFlowLog: string;

  @Column({ name: 'id_data_flow' })
  idDataFlow: string;

  @Column({ name: 'id_data_flow_detail' })
  idDataFlowDetail: string;

  @Column({ name: 'action_flow' })
  actionFlow: string;

  @Column({ name: 'pesan' })
  pesan: string;

  @Column({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'for_module_id' })
  forModuleId: string;
}
