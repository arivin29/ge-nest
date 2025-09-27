import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_reset_user', schema: 'new_bpt' })
export class NewBptTResetUser {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file' })
  file: string;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_t_reset_user' })
  idTResetUser: number;

  @Column({ name: 'id_user_dirubah' })
  idUserDirubah: number;

  @Column({ name: 'id_user_pelaku' })
  idUserPelaku: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'status' })
  status: number;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
