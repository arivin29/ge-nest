import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_sartek', schema: 'new_bpt' })
export class NewBptTIzinSartek {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file' })
  file: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_sartek' })
  idTIzinSartek: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'tgl_masuk', nullable: true })
  tglMasuk: string;

  @Column({ name: 'tgl_proses', nullable: true })
  tglProses: string;

  @Column({ name: 'tgl_selesai', nullable: true })
  tglSelesai: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
