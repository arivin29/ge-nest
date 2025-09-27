import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_imbg_pc', schema: 'new_bpt' })
export class NewBptOnlImbgPc {
  @Column({ name: 'bertindak' })
  bertindak: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'id_kel' })
  idKel: string;

  @Column({ name: 'id_onl_imbg' })
  idOnlImbg: number;

  @PrimaryColumn({ name: 'id_onl_imbg_pc' })
  idOnlImbgPc: number;

  @Column({ name: 'no' })
  no: string;

  @Column({ name: 'no_sk_lama' })
  noSkLama: string;

  @Column({ name: 'tgl_sk_lama' })
  tglSkLama: string;
}
