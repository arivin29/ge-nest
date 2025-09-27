import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdp', schema: 'new_bpt' })
export class NewBptOnlTdp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_kbli' })
  idKbli: string;

  @PrimaryColumn({ name: 'id_onl_tdp' })
  idOnlTdp: number;

  @Column({ name: 'status' })
  status: string;
}
