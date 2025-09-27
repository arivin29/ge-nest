import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_kbli', schema: 'new_bpt' })
export class NewBptTblKbli {
  @Column({ name: 'barjas', nullable: true })
  barjas: string;

  @Column({ name: 'barjas_tdp', nullable: true })
  barjasTdp: string;

  @Column({ name: 'kbli', nullable: true })
  kbli: string;

  @PrimaryColumn({ name: 'kbli_id' })
  kbliId: number;

  @Column({ name: 'tahun', nullable: true })
  tahun: string;
}
