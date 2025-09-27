import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tduppa', schema: 'new_bpt' })
export class NewBptOnlTduppa {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tduppa' })
  idOnlTduppa: number;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;

  @Column({ name: 'subjenis_usaha' })
  subjenisUsaha: string;
}
