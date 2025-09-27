import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_tanah', schema: 'new_bpt' })
export class NewBptTPerusahaanTanah {
  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_kabkot' })
  idKabkot: string;

  @Column({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'id_kel' })
  idKel: string;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_perusahaan_tanah' })
  idPerusahaanTanah: number;

  @Column({ name: 'id_prov' })
  idProv: string;

  @Column({ name: 'luas' })
  luas: string;

  @Column({ name: 'penggunaan_sekarang' })
  penggunaanSekarang: string;

  @Column({ name: 'rt' })
  rt: string;

  @Column({ name: 'rw' })
  rw: string;

  @Column({ name: 'sketsa', nullable: true })
  sketsa: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
