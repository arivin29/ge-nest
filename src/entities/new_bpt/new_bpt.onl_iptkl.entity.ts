import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptkl', schema: 'new_bpt' })
export class NewBptOnlIptkl {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptkl' })
  idOnlIptkl: number;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
