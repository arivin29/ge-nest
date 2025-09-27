import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipot', schema: 'new_bpt' })
export class NewBptOnlSipot {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipot' })
  idOnlSipot: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom' })
  rekom: string;
}
