import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_perusahaan_bidang_usaha', schema: 'new_bpt' })
export class NewBptMPerusahaanBidangUsaha {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_bidang_usaha' })
  idPerusahaanBidangUsaha: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
