import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_perusahaan_sektor', schema: 'new_bpt' })
export class NewBptMPerusahaanSektor {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_sektor' })
  idPerusahaanSektor: number;

  @Column({ name: 'id_perusahaan_sektor_bidang_usaha' })
  idPerusahaanSektorBidangUsaha: number;

  @Column({ name: 'perusahaan_sektor' })
  perusahaanSektor: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
