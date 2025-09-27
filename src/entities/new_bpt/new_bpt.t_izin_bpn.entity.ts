import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_bpn', schema: 'new_bpt' })
export class NewBptTIzinBpn {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'denda', nullable: true })
  denda: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_izin_bpn' })
  idTIzinBpn: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'tgl_masuk', nullable: true })
  tglMasuk: string;

  @Column({ name: 'tgl_proses', nullable: true })
  tglProses: string;

  @Column({ name: 'tgl_selesai', nullable: true })
  tglSelesai: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
