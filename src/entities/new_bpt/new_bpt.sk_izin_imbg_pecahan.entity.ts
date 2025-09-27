import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_imbg_pecahan', schema: 'new_bpt' })
export class NewBptSkIzinImbgPecahan {
  @Column({ name: 'bertindak' })
  bertindak: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'carport' })
  carport: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @Column({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'id_kel' })
  idKel: string;

  @Column({ name: 'id_onl_imbg_pc' })
  idOnlImbgPc: number;

  @PrimaryColumn({ name: 'id_sk_izin_imbg_pecahan' })
  idSkIzinImbgPecahan: number;

  @Column({ name: 'luas_bg' })
  luasBg: string;

  @Column({ name: 'luas_bg_induk' })
  luasBgInduk: string;

  @Column({ name: 'luas_pb' })
  luasPb: string;

  @Column({ name: 'memperhatikan_1' })
  memperhatikan_1: string;

  @Column({ name: 'memperhatikan_2' })
  memperhatikan_2: string;

  @Column({ name: 'no' })
  no: string;

  @Column({ name: 'no_sk_lama' })
  noSkLama: string;

  @Column({ name: 'no_sk_pc', nullable: true })
  noSkPc: string;

  @Column({ name: 'pagar' })
  pagar: string;

  @Column({ name: 'septictank' })
  septictank: string;

  @Column({ name: 'teras' })
  teras: string;

  @Column({ name: 'tgl_sk_lama' })
  tglSkLama: string;

  @Column({ name: 'tipe' })
  tipe: string;

  @Column({ name: 'ttd' })
  ttd: boolean;
}
