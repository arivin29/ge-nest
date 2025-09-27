import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupjkp', schema: 'new_bpt' })
export class NewBptOnlTdupjkp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupjkp' })
  idOnlTdupjkp: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
