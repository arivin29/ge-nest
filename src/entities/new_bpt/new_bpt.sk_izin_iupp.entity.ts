import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iupp', schema: 'new_bpt' })
export class NewBptSkIzinIupp {
  @Column({ name: 'ho' })
  ho: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iupp' })
  idSkIzinIupp: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'luas_ruang_usaha' })
  luasRuangUsaha: string;

  @Column({ name: 'peruntukan' })
  peruntukan: string;

  @Column({ name: 'rekomperindag' })
  rekomperindag: string;

  @Column({ name: 'sewa' })
  sewa: string;

  @Column({ name: 'status_tempat' })
  statusTempat: string;
}
