import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_negara_item', schema: 'new_bpt' })
export class NewBptTPerusahaanNegaraItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @Column({ name: 'id_perusahaan_negara' })
  idPerusahaanNegara: number;

  @PrimaryColumn({ name: 'id_perusahaan_negara_item' })
  idPerusahaanNegaraItem: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
