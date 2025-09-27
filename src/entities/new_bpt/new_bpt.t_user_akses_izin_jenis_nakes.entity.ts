import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_user_akses_izin_jenis_nakes', schema: 'new_bpt' })
export class NewBptTUserAksesIzinJenisNakes {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_izin_jenis_user_nakes' })
  idIzinJenisUserNakes: number;

  @Column({ name: 'id_m_izin_jenis_nakes' })
  idMIzinJenisNakes: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
