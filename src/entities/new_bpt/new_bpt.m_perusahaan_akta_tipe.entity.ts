import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_perusahaan_akta_tipe', schema: 'new_bpt' })
export class NewBptMPerusahaanAktaTipe {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_akta_tipe' })
  idPerusahaanAktaTipe: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
