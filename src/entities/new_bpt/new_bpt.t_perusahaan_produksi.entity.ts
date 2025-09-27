import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_produksi', schema: 'new_bpt' })
export class NewBptTPerusahaanProduksi {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @Column({ name: 'id_perusahaan_produksi' })
  idPerusahaanProduksi: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
