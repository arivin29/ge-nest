import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_pengumuman', schema: 'new_bpt' })
export class NewBptMPengumuman {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @PrimaryColumn({ name: 'id_pengumuman' })
  idPengumuman: number;

  @Column({ name: 'isi' })
  isi: string;

  @Column({ name: 'status' })
  status: boolean;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'tipe' })
  tipe: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'user' })
  user: number;
}
