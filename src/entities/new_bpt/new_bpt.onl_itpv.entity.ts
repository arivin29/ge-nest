import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_itpv', schema: 'new_bpt' })
export class NewBptOnlItpv {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_itmv' })
  idOnlItmv: number;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
