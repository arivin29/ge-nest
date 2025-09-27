import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ippr', schema: 'new_bpt' })
export class NewBptOnlIppr {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ippr' })
  idOnlIppr: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;
}
