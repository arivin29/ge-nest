import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iprm', schema: 'new_bpt' })
export class NewBptOnlIprm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iprm' })
  idOnlIprm: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
