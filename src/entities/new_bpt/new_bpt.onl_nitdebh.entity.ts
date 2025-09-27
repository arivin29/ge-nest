import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nitdebh', schema: 'new_bpt' })
export class NewBptOnlNitdebh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nitdebh' })
  idOnlNitdebh: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
