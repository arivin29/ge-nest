import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipro', schema: 'new_bpt' })
export class NewBptSkIzinSipro {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipro' })
  idSkIzinSipro: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'kompetensi', nullable: true })
  kompetensi: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
