import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ikr', schema: 'new_bpt' })
export class NewBptOnlIkr {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ikr' })
  idOnlIkr: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
