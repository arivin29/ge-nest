import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipbidan', schema: 'new_bpt' })
export class NewBptOnlSipbidan {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipbidan' })
  idOnlSipbidan: number;

  @Column({ name: 'no_sib' })
  noSib: string;

  @Column({ name: 'rekom_ibi' })
  rekomIbi: string;

  @Column({ name: 'str_berlaku' })
  strBerlaku: string;
}
