import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ilkp', schema: 'new_bpt' })
export class NewBptOnlIlkp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ilkp' })
  idOnlIlkp: number;

  @Column({ name: 'nama_lembaga' })
  namaLembaga: string;

  @Column({ name: 'nama_yayasan' })
  namaYayasan: string;

  @Column({ name: 'pemilik' })
  pemilik: string;
}
