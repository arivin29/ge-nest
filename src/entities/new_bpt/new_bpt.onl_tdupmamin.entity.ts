import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupmamin', schema: 'new_bpt' })
export class NewBptOnlTdupmamin {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupmamin' })
  idOnlTdupmamin: number;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
