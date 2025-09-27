import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tduppw', schema: 'new_bpt' })
export class NewBptSkIzinTduppw {
  @Column({ name: 'bidang_usaha' })
  bidangUsaha: string;

  @Column({ name: 'dlh' })
  dlh: string;

  @Column({ name: 'fasilitas_pendukung' })
  fasilitasPendukung: string;

  @Column({ name: 'fasilitas_utama' })
  fasilitasUtama: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_tduppw' })
  idSkIzinTduppw: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'ippt' })
  ippt: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'kajian_teknis' })
  kajianTeknis: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;

  @Column({ name: 'perjanjian_sewa' })
  perjanjianSewa: string;

  @Column({ name: 'sewa' })
  sewa: string;
}
