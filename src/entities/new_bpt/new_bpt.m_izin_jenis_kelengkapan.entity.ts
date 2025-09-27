import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_kelengkapan', schema: 'new_bpt' })
export class NewBptMIzinJenisKelengkapan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @PrimaryColumn({ name: 'id_izin_jenis_kelengkapan' })
  idIzinJenisKelengkapan: number;

  @Column({ name: 'id_kelengkapan' })
  idKelengkapan: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
