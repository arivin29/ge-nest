import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_cabang_alamat', schema: 'new_bpt' })
export class NewBptTPerusahaanCabangAlamat {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'fax' })
  fax: string;

  @Column({ name: 'id_kel' })
  idKel: number;

  @PrimaryColumn({ name: 'id_perusahaahaan_cabang_alamat' })
  idPerusahaahaanCabangAlamat: number;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @Column({ name: 'kode_pos' })
  kodePos: string;

  @Column({ name: 'tlpn' })
  tlpn: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'web' })
  web: string;
}
