import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipp', schema: 'new_bpt' })
export class NewBptSkIzinSipp {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipp' })
  idSkIzinSipp: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'kompetensi', nullable: true })
  kompetensi: string;

  @Column({ name: 'no_pertek', nullable: true })
  noPertek: string;

  @Column({ name: 'no_ppni', nullable: true })
  noPpni: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'sarana2' })
  sarana2: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;

  @Column({ name: 'untuk_praktek' })
  untukPraktek: string;
}
