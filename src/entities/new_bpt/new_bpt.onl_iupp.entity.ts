import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iupp', schema: 'new_bpt' })
export class NewBptOnlIupp {
  @Column({ name: 'ho' })
  ho: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iupp' })
  idOnlIupp: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'luas_ruang_usaha' })
  luasRuangUsaha: string;

  @Column({ name: 'rekomperindag' })
  rekomperindag: string;

  @Column({ name: 'status_tempat' })
  statusTempat: string;
}
