import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossitptk', schema: 'new_bpt' })
export class NewBptOnlOssitptk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossitptk' })
  idOnlOssitptk: number;

  @Column({ name: 'kapasitas_tki' })
  kapasitasTki: string;

  @Column({ name: 'no_tki' })
  noTki: string;

  @Column({ name: 'tgl_tki' })
  tglTki: string;
}
