import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_tim_teknis', schema: 'new_bpt' })
export class NewBptMTimTeknis {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'dinas' })
  dinas: string;

  @PrimaryColumn({ name: 'id_m_tim_teknis' })
  idMTimTeknis: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
