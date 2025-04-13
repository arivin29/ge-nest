import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'data_flow_detail', schema: 'erp_tools' })
export class ToolsDataFlowDetail {
  @PrimaryColumn({ name: 'id_data_flow_detail' })
  idDataFlowDetail: string;

  @Column({ name: 'id_data_flow' })
  idDataFlow: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'id_pegawai' })
  idPegawai: string;

  @Column({ name: 'sebagai' })
  sebagai: string;

  @Column({ name: 'button_next_text' })
  buttonNextText: string;

  @Column({ name: 'pesan' })
  pesan: string;

  @Column({ name: 'menu_test' })
  menuTest: string;

  @Column({ name: 'menu_name' })
  menuName: string;

  @Column({ name: 'enable_update' })
  enableUpdate: string;

  @Column({ name: 'reject' })
  reject: number;

  @Column({ name: 'order_by' })
  orderBy: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'id_jabatan' })
  idJabatan: string;
}
