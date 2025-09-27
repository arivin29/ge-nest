import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_komoditas', schema: 'new_bpt' })
export class NewBptTPerusahaanKomoditas {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_perusahaan_komoditas' })
  idPerusahaanKomoditas: number;

  @Column({ name: 'jumlah' })
  jumlah: string;

  @Column({ name: 'kbli' })
  kbli: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'satuan' })
  satuan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
