import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipag', schema: 'new_bpt' })
export class NewBptOnlIpag {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipag' })
  idOnlIpag: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;
}
