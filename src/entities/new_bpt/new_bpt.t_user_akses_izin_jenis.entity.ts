import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_user_akses_izin_jenis', schema: 'new_bpt' })
export class NewBptTUserAksesIzinJenis {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @PrimaryColumn({ name: 'id_izin_jenis_user_akses' })
  idIzinJenisUserAkses: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
