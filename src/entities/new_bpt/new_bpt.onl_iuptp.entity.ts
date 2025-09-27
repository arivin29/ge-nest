import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iuptp', schema: 'new_bpt' })
export class NewBptOnlIuptp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iuptp' })
  idOnlIuptp: number;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
