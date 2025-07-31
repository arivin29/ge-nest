import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'penawaran_revisi_log', schema: 'erp_pelanggan' })
export class PelangganPenawaranRevisiLog {
  @Column({ name: 'alasan_revisi', nullable: true })
  alasanRevisi: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_penawaran_asal' })
  idPenawaranAsal: string;

  @Column({ name: 'id_penawaran_revisi' })
  idPenawaranRevisi: string;

  @PrimaryColumn({ name: 'id_revisi' })
  idRevisi: string;
}
