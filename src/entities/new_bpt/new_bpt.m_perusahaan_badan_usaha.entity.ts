import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_perusahaan_badan_usaha', schema: 'new_bpt' })
export class NewBptMPerusahaanBadanUsaha {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_badan_usaha' })
  idPerusahaanBadanUsaha: number;

  @Column({ name: 'kode' })
  kode: string;

  @Column({ name: 'kode_badan_hukum' })
  kodeBadanHukum: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'no_urut_next' })
  noUrutNext: number;

  @Column({ name: 'undang_undang', nullable: true })
  undangUndang: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
