import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rnkv', schema: 'new_bpt' })
export class NewBptOnlRnkv {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rnkv' })
  idOnlRnkv: number;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
