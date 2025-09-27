import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirikh', schema: 'new_bpt' })
export class NewBptOnlNirikh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirikh' })
  idOnlNirikh: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
