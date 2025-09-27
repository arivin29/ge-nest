import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_siptkv', schema: 'new_bpt' })
export class NewBptOnlSiptkv {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_siptkv' })
  idOnlSiptkv: number;

  @Column({ name: 'nomor_str_tkv' })
  nomorStrTkv: string;
}
