import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iplpb', schema: 'new_bpt' })
export class NewBptOnlIplpb {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iplpb' })
  idOnlIplpb: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
