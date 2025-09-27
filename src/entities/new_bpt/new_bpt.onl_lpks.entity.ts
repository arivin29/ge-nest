import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_lpks', schema: 'new_bpt' })
export class NewBptOnlLpks {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_lpks' })
  idOnlLpks: number;

  @Column({ name: 'jenis_izin' })
  jenisIzin: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;
}
