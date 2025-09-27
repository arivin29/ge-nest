import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipfis', schema: 'new_bpt' })
export class NewBptSkIzinSipfis {
  @Column({ name: 'bekerja' })
  bekerja: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipfis' })
  idSkIzinSipfis: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jenis_sip' })
  jenisSip: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'kehilangan', nullable: true })
  kehilangan: string;

  @Column({ name: 'no_rekom', nullable: true })
  noRekom: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ifi', nullable: true })
  rekomIfi: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_rekom', nullable: true })
  tglRekom: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
