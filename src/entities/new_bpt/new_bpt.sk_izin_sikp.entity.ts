import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sikp', schema: 'new_bpt' })
export class NewBptSkIzinSikp {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sikp' })
  idSkIzinSikp: number;

  @Column({ name: 'no_ppni' })
  noPpni: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'untuk_praktek' })
  untukPraktek: string;
}
