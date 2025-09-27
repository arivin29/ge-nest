import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipbm', schema: 'new_bpt' })
export class NewBptSkIzinSipbm {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipbm' })
  idSkIzinSipbm: number;

  @Column({ name: 'no_pertek', nullable: true })
  noPertek: string;

  @Column({ name: 'no_sib' })
  noSib: string;

  @Column({ name: 'rekom_ibi' })
  rekomIbi: string;

  @Column({ name: 'str_berlaku' })
  strBerlaku: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;
}
