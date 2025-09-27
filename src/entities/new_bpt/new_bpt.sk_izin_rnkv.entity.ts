import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_rnkv', schema: 'new_bpt' })
export class NewBptSkIzinRnkv {
  @Column({ name: 'adm' })
  adm: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_rnkv' })
  idSkIzinRnkv: number;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
