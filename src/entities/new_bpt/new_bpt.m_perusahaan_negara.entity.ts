import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_perusahaan_negara', schema: 'new_bpt' })
export class NewBptMPerusahaanNegara {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_negara' })
  idPerusahaanNegara: number;

  @Column({ name: 'kode_negara' })
  kodeNegara: string;

  @Column({ name: 'nama_negara' })
  namaNegara: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
