import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_kecamatan', schema: 'new_bpt' })
export class NewBptMIzinJenisKecamatan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'hk' })
  hk: boolean;

  @PrimaryColumn({ name: 'id_m_izin_jenis_kecamatan' })
  idMIzinJenisKecamatan: number;

  @Column({ name: 'kode' })
  kode: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'no_izin' })
  noIzin: string;

  @Column({ name: 'nomor_urut' })
  nomorUrut: string;

  @Column({ name: 'online' })
  online: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
