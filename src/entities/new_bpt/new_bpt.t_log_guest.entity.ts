import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_log_guest', schema: 'new_bpt' })
export class NewBptTLogGuest {
  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'email' })
  email: string;

  @PrimaryColumn({ name: 'id_t_log_guest' })
  idTLogGuest: number;

  @Column({ name: 'ip_user' })
  ipUser: string;

  @Column({ name: 'ket' })
  ket: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'user_agent' })
  userAgent: string;
}
