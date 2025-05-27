import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'penawaran_tag', schema: 'erp_pelanggan' })
export class PelangganPenawaranTag {
  @PrimaryColumn({ name: 'id_penawaran_tag' })
  idPenawaranTag: string;

  @Column({ name: 'id_penawaran' })
  idPenawaran: string;

  @Column({ name: 'tag' })
  tag: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
