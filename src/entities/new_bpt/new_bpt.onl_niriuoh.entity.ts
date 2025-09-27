import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_niriuoh', schema: 'new_bpt' })
export class NewBptOnlNiriuoh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_niriuoh' })
  idOnlNiriuoh: number;

  @Column({ name: 'Jenis' })
  Jenis: string;

  @Column({ name: 'Nos' })
  Nos: string;

  @Column({ name: 'Perihals' })
  Perihals: string;

  @Column({ name: 'Tgls' })
  Tgls: string;
}
