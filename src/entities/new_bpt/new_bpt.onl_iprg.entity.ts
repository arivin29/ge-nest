import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iprg', schema: 'new_bpt' })
export class NewBptOnlIprg {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iprg' })
  idOnlIprg: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
