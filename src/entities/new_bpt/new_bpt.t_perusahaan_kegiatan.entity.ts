import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_kegiatan', schema: 'new_bpt' })
export class NewBptTPerusahaanKegiatan {
  @Column({ name: 'barang' })
  barang: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_perusahaan_kegiatan' })
  idPerusahaanKegiatan: number;

  @Column({ name: 'kegiatan_usaha' })
  kegiatanUsaha: string;

  @Column({ name: 'kelembagaan' })
  kelembagaan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
