import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_tolak', schema: 'new_bpt' })
export class NewBptTIzinTolak {
  @Column({ name: 'alasan', nullable: true })
  alasan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file' })
  file: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @Column({ name: 'id_izin_posisi_tolak' })
  idIzinPosisiTolak: boolean;

  @PrimaryColumn({ name: 'id_izin_tolak' })
  idIzinTolak: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'id_user_arsip' })
  idUserArsip: boolean;

  @Column({ name: 'id_user_bo' })
  idUserBo: boolean;

  @Column({ name: 'id_user_kabid' })
  idUserKabid: boolean;

  @Column({ name: 'id_user_kadin' })
  idUserKadin: boolean;

  @Column({ name: 'id_user_penerbitan' })
  idUserPenerbitan: boolean;

  @Column({ name: 'id_user_penyerahan' })
  idUserPenyerahan: boolean;

  @Column({ name: 'id_user_petugas' })
  idUserPetugas: boolean;

  @Column({ name: 'id_user_sekdis' })
  idUserSekdis: boolean;

  @Column({ name: 'no_penolakan', nullable: true })
  noPenolakan: string;

  @Column({ name: 'no_urut' })
  noUrut: number;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_ambil' })
  tglAmbil: string;

  @Column({ name: 'tgl_arsip' })
  tglArsip: string;

  @Column({ name: 'tgl_kbd' })
  tglKbd: string;

  @Column({ name: 'tgl_ksb' })
  tglKsb: string;

  @Column({ name: 'tgl_proses' })
  tglProses: string;

  @Column({ name: 'tgl_sekdis' })
  tglSekdis: string;

  @Column({ name: 'tgl_terbit' })
  tglTerbit: string;

  @Column({ name: 'tgl_ttd' })
  tglTtd: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
