import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_conf_tlp', schema: 'new_bpt' })
export class NewBptTConfTlp {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_pemohon', nullable: true })
  idPemohon: number;

  @PrimaryColumn({ name: 'id_t_conf_tlp' })
  idTConfTlp: number;

  @Column({ name: 'no_tlp', nullable: true })
  noTlp: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'token', nullable: true })
  token: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
