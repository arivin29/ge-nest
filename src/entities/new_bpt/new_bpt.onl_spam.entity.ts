import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_spam', schema: 'new_bpt' })
export class NewBptOnlSpam {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_spam' })
  idOnlSpam: number;

  @Column({ name: 'no_imb' })
  noImb: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_imb' })
  tglImb: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
