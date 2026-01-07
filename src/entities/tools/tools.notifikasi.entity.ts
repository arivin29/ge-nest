import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'notifikasi', schema: 'erp_tools' })
export class ToolsNotifikasi {
  @PrimaryColumn({ name: 'id_notifikasi' })
  idNotifikasi: string;

  @Column({ name: 'for_module', nullable: true })
  forModule: string;

  @Column({ name: 'id_master_notifikasi', nullable: true })
  idMasterNotifikasi: string;

  @Column({ name: 'id_master_notifikasi_level', nullable: true })
  idMasterNotifikasiLevel: string;

  @Column({ name: 'id_pegawai', nullable: true })
  idPegawai: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'pesan', nullable: true })
  pesan: string;

  @Column({ name: 'for_module_id', nullable: true })
  forModuleId: string;

  @Column({ name: 'param_1', nullable: true })
  param_1: string;

  @Column({ name: 'param_2', nullable: true })
  param_2: string;

  @Column({ name: 'param_3', nullable: true })
  param_3: string;

  @Column({ name: 'for_module_router', nullable: true })
  forModuleRouter: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'jenis', nullable: true })
  jenis: string;
}
