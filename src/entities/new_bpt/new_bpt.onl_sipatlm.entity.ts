import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipatlm', schema: 'new_bpt' })
export class NewBptOnlSipatlm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipatlm' })
  idOnlSipatlm: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom' })
  rekom: string;
}
