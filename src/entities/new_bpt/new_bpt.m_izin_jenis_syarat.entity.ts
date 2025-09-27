import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_syarat', schema: 'new_bpt' })
export class NewBptMIzinJenisSyarat {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @Column({ name: 'id_izin_jenis_kategori' })
  idIzinJenisKategori: number;

  @PrimaryColumn({ name: 'id_izin_jenis_syarat' })
  idIzinJenisSyarat: number;

  @Column({ name: 'syarat' })
  syarat: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
