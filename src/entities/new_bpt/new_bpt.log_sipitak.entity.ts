import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_sipitak', schema: 'new_bpt' })
export class NewBptLogSipitak {
  @PrimaryColumn({ name: 'id_log_sipitak' })
  idLogSipitak: number;

  @Column({ name: 'id_optimis_sipitak' })
  idOptimisSipitak: number;

  @Column({ name: 'tanggal' })
  tanggal: string;
}
