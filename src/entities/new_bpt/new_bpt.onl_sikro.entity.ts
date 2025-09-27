import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sikro', schema: 'new_bpt' })
export class NewBptOnlSikro {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sikro' })
  idOnlSikro: number;

  @Column({ name: 'no_str' })
  noStr: string;
}
