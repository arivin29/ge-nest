import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_siptkv', schema: 'new_bpt' })
export class NewBptSkIzinSiptkv {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_siptkv' })
  idSkIzinSiptkv: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'norekom_patki', nullable: true })
  norekomPatki: string;

  @Column({ name: 'peruntukan', nullable: true })
  peruntukan: string;

  @Column({ name: 'sarana', nullable: true })
  sarana: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
