import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_log_ttd', schema: 'new_bpt' })
export class NewBptTLogTtd {
  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'detail', nullable: true })
  detail: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_log_ttd' })
  idTLogTtd: number;

  @Column({ name: 'ket', nullable: true })
  ket: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
