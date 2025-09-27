import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nip2jtp', schema: 'new_bpt' })
export class NewBptOnlNip2jtp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nip2jtp' })
  idOnlNip2jtp: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
