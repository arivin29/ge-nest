import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_log_hit_disduk', schema: 'new_bpt' })
export class NewBptTLogHitDisduk {
  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @PrimaryColumn({ name: 'id_t_log_hit_disduk' })
  idTLogHitDisduk: number;

  @Column({ name: 'ip_user' })
  ipUser: string;

  @Column({ name: 'ket' })
  ket: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
