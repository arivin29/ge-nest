import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nipplh', schema: 'new_bpt' })
export class NewBptOnlNipplh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nipplh' })
  idOnlNipplh: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
