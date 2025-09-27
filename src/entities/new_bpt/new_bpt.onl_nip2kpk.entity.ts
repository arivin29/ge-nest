import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nip2kpk', schema: 'new_bpt' })
export class NewBptOnlNip2kpk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nip2kpk' })
  idOnlNip2kpk: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
