import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupjp', schema: 'new_bpt' })
export class NewBptOnlTdupjp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupjp' })
  idOnlTdupjp: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
