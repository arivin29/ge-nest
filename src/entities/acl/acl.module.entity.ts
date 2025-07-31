import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'module', schema: 'erp_acl' })
export class AclModule {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'deskripsi', nullable: true })
  deskripsi: string;

  @PrimaryColumn({ name: 'id_module' })
  idModule: string;

  @Column({ name: 'is_aktif', nullable: true })
  isAktif: boolean;

  @Column({ name: 'kode_module', nullable: true })
  kodeModule: string;

  @Column({ name: 'nama_db', nullable: true })
  namaDb: string;

  @Column({ name: 'nama_module', nullable: true })
  namaModule: string;

  @Column({ name: 'nama_tabel', nullable: true })
  namaTabel: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'urutan', nullable: true })
  urutan: number;
}
