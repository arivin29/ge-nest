import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_sektor_item', schema: 'new_bpt' })
export class NewBptTPerusahaanSektorItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @Column({ name: 'id_perusahaan_sektor' })
  idPerusahaanSektor: number;

  @PrimaryColumn({ name: 'id_perusahaan_sektor_item' })
  idPerusahaanSektorItem: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
