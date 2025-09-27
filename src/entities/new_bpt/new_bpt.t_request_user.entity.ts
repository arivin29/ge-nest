import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_request_user', schema: 'new_bpt' })
export class NewBptTRequestUser {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file' })
  file: string;

  @PrimaryColumn({ name: 'id_t_request_user' })
  idTRequestUser: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'isi' })
  isi: string;

  @Column({ name: 'judul' })
  judul: string;

  @Column({ name: 'status' })
  status: boolean;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
