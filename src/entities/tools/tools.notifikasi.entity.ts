import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'notifikasi', schema: 'erp_tools' })
export class ToolsNotifikasi {
  @PrimaryColumn({ name: 'id_notifikasi' })
  idNotifikasi: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'id_master_notifikasi' })
  idMasterNotifikasi: string;

  @Column({ name: 'id_master_notifikasi_level' })
  idMasterNotifikasiLevel: string;

  @Column({ name: 'id_pegawai' })
  idPegawai: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'pesan' })
  pesan: string;

  @Column({ name: 'for_module_id' })
  forModuleId: string;

  @Column({ name: 'param_1' })
  param_1: string;

  @Column({ name: 'param_2' })
  param_2: string;

  @Column({ name: 'param_3' })
  param_3: string;

  @Column({ name: 'for_module_router' })
  forModuleRouter: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'jenis' })
  jenis: string;
}
