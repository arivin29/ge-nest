import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_itptki', schema: 'new_bpt' })
export class NewBptOnlItptki {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_itptki' })
  idOnlItptki: number;

  @Column({ name: 'kapasitas_tki' })
  kapasitasTki: string;

  @Column({ name: 'no_tki' })
  noTki: string;

  @Column({ name: 'tgl_tki' })
  tglTki: string;
}
