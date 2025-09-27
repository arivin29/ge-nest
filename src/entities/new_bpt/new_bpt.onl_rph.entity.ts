import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rph', schema: 'new_bpt' })
export class NewBptOnlRph {
  @Column({ name: 'campuran' })
  campuran: string;

  @Column({ name: 'dewasa' })
  dewasa: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rph' })
  idOnlRph: number;

  @Column({ name: 'jenis_ternak' })
  jenisTernak: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'strain' })
  strain: string;
}
