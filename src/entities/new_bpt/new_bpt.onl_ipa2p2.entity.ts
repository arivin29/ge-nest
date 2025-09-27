import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipa2p2', schema: 'new_bpt' })
export class NewBptOnlIpa2p2 {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipa2p2' })
  idOnlIpa2p2: number;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
