import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_reset_user_old', schema: 'new_bpt' })
export class NewBptTResetUserOld {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_t_reset_user' })
  idTResetUser: number;

  @Column({ name: 'judul' })
  judul: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
