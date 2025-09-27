import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_perusahaan_sektor_bidang_usaha', schema: 'new_bpt' })
export class NewBptMPerusahaanSektorBidangUsaha {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_sektor_bidang_usaha' })
  idPerusahaanSektorBidangUsaha: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'usaha' })
  usaha: string;
}
