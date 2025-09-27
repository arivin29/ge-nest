import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ikag', schema: 'new_bpt' })
export class NewBptOnlIkag {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ikag' })
  idOnlIkag: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;
}
