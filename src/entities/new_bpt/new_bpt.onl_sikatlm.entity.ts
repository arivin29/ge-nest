import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sikatlm', schema: 'new_bpt' })
export class NewBptOnlSikatlm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sikatlm' })
  idOnlSikatlm: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom' })
  rekom: string;
}
