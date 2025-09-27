import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iutm', schema: 'new_bpt' })
export class NewBptSkIzinIutm {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iutm' })
  idSkIzinIutm: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_iutm' })
  jenisIutm: string;

  @Column({ name: 'luas_ruang_usaha' })
  luasRuangUsaha: string;

  @Column({ name: 'nama_imb' })
  namaImb: string;

  @Column({ name: 'nomor_imbg' })
  nomorImbg: string;

  @Column({ name: 'nomor_sk_ho' })
  nomorSkHo: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'peruntukan_imb' })
  peruntukanImb: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'sewa' })
  sewa: string;
}
