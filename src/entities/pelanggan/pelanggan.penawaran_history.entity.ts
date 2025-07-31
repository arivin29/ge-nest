import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'penawaran_history', schema: 'erp_pelanggan' })
export class PelangganPenawaranHistory {
  @Column({ name: 'action' })
  action: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'id_penawaran' })
  idPenawaran: string;

  @PrimaryColumn({ name: 'id_penawaran_history' })
  idPenawaranHistory: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;
}
