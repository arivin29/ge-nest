import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sippa', schema: 'new_bpt' })
export class NewBptSkIzinSippa {
  @Column({ name: 'dikeluarkan', nullable: true })
  dikeluarkan: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sippa' })
  idSkIzinSippa: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nolama', nullable: true })
  nolama: string;

  @Column({ name: 'nomor_strtgm' })
  nomorStrtgm: string;

  @Column({ name: 'pada_tgl' })
  padaTgl: string;

  @Column({ name: 'pendidikan' })
  pendidikan: string;

  @Column({ name: 'sarana', nullable: true })
  sarana: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
