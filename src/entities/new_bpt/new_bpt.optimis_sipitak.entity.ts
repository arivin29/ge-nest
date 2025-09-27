import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'optimis_sipitak', schema: 'new_bpt' })
export class NewBptOptimisSipitak {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_optimis_sipitak' })
  idOptimisSipitak: number;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;
}
