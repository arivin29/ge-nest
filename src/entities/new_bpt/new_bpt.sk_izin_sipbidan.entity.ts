import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipbidan', schema: 'new_bpt' })
export class NewBptSkIzinSipbidan {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipbidan' })
  idSkIzinSipbidan: number;

  @Column({ name: 'no_sib' })
  noSib: string;

  @Column({ name: 'rekom_ibi' })
  rekomIbi: string;

  @Column({ name: 'str_berlaku' })
  strBerlaku: string;
}
