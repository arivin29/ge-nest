import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupwt', schema: 'new_bpt' })
export class NewBptOnlTdupwt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupwt' })
  idOnlTdupwt: number;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
