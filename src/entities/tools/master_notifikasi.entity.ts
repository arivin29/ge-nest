import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'master_notifikasi', schema: 'erp_tools' })
export class MasterNotifikasi {
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

  @Column({ name: 'icon' })
  icon: string;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'id_departemen' })
  idDepartemen: string;

  @Column({ name: 'id_divisi' })
  idDivisi: string;

  @Column({ name: 'id_section' })
  idSection: string;

  @Column({ name: 'cron_job' })
  cronJob: string;

  @Column({ name: 'validasi' })
  validasi: number;

  @Column({ name: 'created_at' })
  createdAt: any;

  @Column({ name: 'updated_at' })
  updatedAt: any;
}
