import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tduprhu', schema: 'new_bpt' })
export class NewBptOnlTduprhu {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tduprhu' })
  idOnlTduprhu: number;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;

  @Column({ name: 'subjenis_usaha' })
  subjenisUsaha: string;
}
