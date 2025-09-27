import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiukh', schema: 'new_bpt' })
export class NewBptOnlOssiukh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiukh' })
  idOnlOssiukh: number;

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
