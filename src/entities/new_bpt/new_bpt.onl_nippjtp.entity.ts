import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nippjtp', schema: 'new_bpt' })
export class NewBptOnlNippjtp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nippjtp' })
  idOnlNippjtp: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
