import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_chat', schema: 'new_bpt' })
export class NewBptTIzinChat {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_chat' })
  idTIzinChat: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'isi' })
  isi: string;

  @Column({ name: 'status' })
  status: boolean;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
