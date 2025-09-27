import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptk', schema: 'new_bpt' })
export class NewBptOnlIptk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptk' })
  idOnlIptk: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
