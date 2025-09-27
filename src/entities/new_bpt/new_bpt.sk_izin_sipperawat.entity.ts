import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipperawat', schema: 'new_bpt' })
export class NewBptSkIzinSipperawat {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipperawat' })
  idSkIzinSipperawat: number;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'rekom_ppni' })
  rekomPpni: string;
}
