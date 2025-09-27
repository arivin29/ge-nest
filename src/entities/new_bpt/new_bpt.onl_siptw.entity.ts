import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_siptw', schema: 'new_bpt' })
export class NewBptOnlSiptw {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_siptw' })
  idOnlSiptw: number;

  @Column({ name: 'no_strtw' })
  noStrtw: string;
}
