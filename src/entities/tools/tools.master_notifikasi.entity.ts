import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'master_notifikasi', schema: 'erp_tools' })
export class ToolsMasterNotifikasi {
  @PrimaryColumn({ name: 'id_master_notifikasi' })
  idMasterNotifikasi: string;

  @Column({ name: 'master_notifikasi' })
  masterNotifikasi: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'for_module_router' })
  forModuleRouter: string;

  @Column({ name: 'nama_tabel' })
  namaTabel: string;

  @Column({ name: 'fild_tanggal' })
  fildTanggal: string;

  @Column({ name: 'fild_status' })
  fildStatus: string;

  @Column({ name: 'icon', nullable: true })
  icon: string;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @Column({ name: 'id_departemen', nullable: true })
  idDepartemen: string;

  @Column({ name: 'id_divisi', nullable: true })
  idDivisi: string;

  @Column({ name: 'id_section', nullable: true })
  idSection: string;

  @Column({ name: 'cron_job', nullable: true })
  cronJob: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
