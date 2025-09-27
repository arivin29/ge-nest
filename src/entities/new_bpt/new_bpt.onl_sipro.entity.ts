import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipro', schema: 'new_bpt' })
export class NewBptOnlSipro {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipro' })
  idOnlSipro: number;

  @Column({ name: 'no_str' })
  noStr: string;
}
