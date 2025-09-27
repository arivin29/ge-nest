import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ikrg', schema: 'new_bpt' })
export class NewBptOnlIkrg {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ikrg' })
  idOnlIkrg: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
