import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'optimis_sipitak_ilok', schema: 'new_bpt' })
export class NewBptOptimisSipitakIlok {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_optimis_sipitak_ilok' })
  idOptimisSipitakIlok: number;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;
}
