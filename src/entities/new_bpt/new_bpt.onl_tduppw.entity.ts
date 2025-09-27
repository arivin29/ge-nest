import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tduppw', schema: 'new_bpt' })
export class NewBptOnlTduppw {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tduppw' })
  idOnlTduppw: number;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
