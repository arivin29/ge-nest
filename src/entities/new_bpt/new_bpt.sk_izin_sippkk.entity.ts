import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sippkk', schema: 'new_bpt' })
export class NewBptSkIzinSippkk {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sippkk' })
  idSkIzinSippkk: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'praktek', nullable: true })
  praktek: string;

  @Column({ name: 'rekom_iakmi' })
  rekomIakmi: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
