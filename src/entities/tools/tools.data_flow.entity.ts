import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'data_flow', schema: 'erp_tools' })
export class ToolsDataFlow {
  @PrimaryColumn({ name: 'id_data_flow' })
  idDataFlow: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'tabel_name' })
  tabelName: string;

  @Column({ name: 'name_flow' })
  nameFlow: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'default_status' })
  defaultStatus: string;

  @Column({ name: 'close_status' })
  closeStatus: string;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'id_divisi' })
  idDivisi: string;

  @Column({ name: 'id_departemen' })
  idDepartemen: string;

  @Column({ name: 'id_section' })
  idSection: string;

  @Column({ name: 'id_jabatan' })
  idJabatan: string;

  @Column({ name: 'data_flow_status' })
  dataFlowStatus: number;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'validasi' })
  validasi: number;

  @Column({ name: 'id_users' })
  idUsers: string;
}
