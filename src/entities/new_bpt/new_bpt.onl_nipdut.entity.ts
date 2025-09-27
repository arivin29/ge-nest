import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nipdut', schema: 'new_bpt' })
export class NewBptOnlNipdut {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nipdut' })
  idOnlNipdut: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
