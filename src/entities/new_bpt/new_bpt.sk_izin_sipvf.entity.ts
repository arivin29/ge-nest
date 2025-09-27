import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipvf', schema: 'new_bpt' })
export class NewBptSkIzinSipvf {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipvf' })
  idSkIzinSipvf: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek' })
  jmlPraktek: number;

  @Column({ name: 'kompetensi' })
  kompetensi: string;

  @Column({ name: 'masa_berlaku_strvf' })
  masaBerlakuStrvf: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'no_strvf' })
  noStrvf: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
