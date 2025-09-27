import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ikrm', schema: 'new_bpt' })
export class NewBptOnlIkrm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ikrm' })
  idOnlIkrm: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
