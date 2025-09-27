import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipblkln', schema: 'new_bpt' })
export class NewBptOnlIpblkln {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipblkln' })
  idOnlIpblkln: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
