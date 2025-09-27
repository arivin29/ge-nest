import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupjip', schema: 'new_bpt' })
export class NewBptOnlTdupjip {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupjip' })
  idOnlTdupjip: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
