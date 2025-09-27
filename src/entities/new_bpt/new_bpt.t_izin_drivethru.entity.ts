import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_drivethru', schema: 'new_bpt' })
export class NewBptTIzinDrivethru {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_drivethru' })
  idTIzinDrivethru: number;

  @Column({ name: 'id_user_keluar', nullable: true })
  idUserKeluar: number;

  @Column({ name: 'id_user_masuk', nullable: true })
  idUserMasuk: number;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'tgl_keluar', nullable: true })
  tglKeluar: string;

  @Column({ name: 'tgl_masuk', nullable: true })
  tglMasuk: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
