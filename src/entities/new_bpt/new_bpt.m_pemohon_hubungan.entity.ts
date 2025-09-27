import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_pemohon_hubungan', schema: 'new_bpt' })
export class NewBptMPemohonHubungan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_pemohon_hubungan' })
  idPemohonHubungan: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
