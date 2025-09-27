import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sikro', schema: 'new_bpt' })
export class NewBptSkIzinSikro {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sikro' })
  idSkIzinSikro: number;

  @Column({ name: 'no_str' })
  noStr: string;
}
