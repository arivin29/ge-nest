import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_imcb', schema: 'new_bpt' })
export class NewBptOnlImcb {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_imcb' })
  idOnlImcb: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
