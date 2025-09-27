import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_siptgm', schema: 'new_bpt' })
export class NewBptSkIzinSiptgm {
  @Column({ name: 'berlaku_strtgm', nullable: true })
  berlakuStrtgm: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_siptgm' })
  idSkIzinSiptgm: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_strtgm' })
  nomorStrtgm: string;

  @Column({ name: 'pada_tgl', nullable: true })
  padaTgl: string;

  @Column({ name: 'pendidikan' })
  pendidikan: string;

  @Column({ name: 'praktek', nullable: true })
  praktek: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;

  @Column({ name: 'untuk_praktek', nullable: true })
  untukPraktek: string;
}
