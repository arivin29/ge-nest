import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipperawat', schema: 'new_bpt' })
export class NewBptOnlSipperawat {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipperawat' })
  idOnlSipperawat: number;

  @Column({ name: 'no_ppni' })
  noPpni: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;
}
