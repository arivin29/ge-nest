import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iptpk', schema: 'new_bpt' })
export class NewBptSkIzinIptpk {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iptpk' })
  idSkIzinIptpk: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'kompetensi', nullable: true })
  kompetensi: string;

  @Column({ name: 'no_rekom_dinkes', nullable: true })
  noRekomDinkes: string;

  @Column({ name: 'no_rekomendasi', nullable: true })
  noRekomendasi: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'no_strpk', nullable: true })
  noStrpk: string;

  @Column({ name: 'penanggungjawab', nullable: true })
  penanggungjawab: string;

  @Column({ name: 'sarana', nullable: true })
  sarana: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_rekomendasi', nullable: true })
  tglRekomendasi: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;

  @Column({ name: 'tipe', nullable: true })
  tipe: string;
}
