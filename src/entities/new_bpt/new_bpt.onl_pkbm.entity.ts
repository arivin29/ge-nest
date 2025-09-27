import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_pkbm', schema: 'new_bpt' })
export class NewBptOnlPkbm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_pkbm' })
  idOnlPkbm: number;

  @Column({ name: 'nama_pkbm' })
  namaPkbm: string;

  @Column({ name: 'nama_yayasan' })
  namaYayasan: string;

  @Column({ name: 'pemilik' })
  pemilik: string;
}
