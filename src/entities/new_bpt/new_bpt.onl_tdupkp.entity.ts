import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupkp', schema: 'new_bpt' })
export class NewBptOnlTdupkp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupkp' })
  idOnlTdupkp: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
