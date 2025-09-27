import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_log', schema: 'new_bpt' })
export class NewBptTPerusahaanLog {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_t_perusahaan_log' })
  idTPerusahaanLog: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
