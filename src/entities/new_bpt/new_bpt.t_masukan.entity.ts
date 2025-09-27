import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_masukan', schema: 'new_bpt' })
export class NewBptTMasukan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_t_masukan' })
  idTMasukan: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'isi' })
  isi: string;

  @Column({ name: 'status' })
  status: number;

  @Column({ name: 'tanggal', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
