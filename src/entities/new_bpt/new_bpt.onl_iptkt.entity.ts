import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptkt', schema: 'new_bpt' })
export class NewBptOnlIptkt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptkt' })
  idOnlIptkt: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
