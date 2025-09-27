import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_itkhwna', schema: 'new_bpt' })
export class NewBptOnlItkhwna {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_itkhwna' })
  idOnlItkhwna: number;

  @Column({ name: 'nama_faskes' })
  namaFaskes: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'praktek_ke' })
  praktekKe: boolean;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
