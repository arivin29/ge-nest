import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'module', schema: 'erp_acl' })
export class Module {
  @PrimaryColumn({ name: 'id_module' })
  idModule: string;

  @Column({ name: 'kode_module' })
  kodeModule: string;

  @Column({ name: 'nama_module' })
  namaModule: string;

  @Column({ name: 'nama_tabel' })
  namaTabel: string;

  @Column({ name: 'deskripsi' })
  deskripsi: string;

  @Column({ name: 'is_aktif' })
  isAktif: boolean;

  @Column({ name: 'urutan' })
  urutan: number;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
