import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_kontak', schema: 'new_bpt' })
export class NewBptTPerusahaanKontak {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'hp' })
  hp: string;

  @Column({ name: 'id_pemohon_hubungan' })
  idPemohonHubungan: number;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_perusahaan_kontak' })
  idPerusahaanKontak: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'tlpn' })
  tlpn: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
