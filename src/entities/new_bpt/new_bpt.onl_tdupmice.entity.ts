import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupmice', schema: 'new_bpt' })
export class NewBptOnlTdupmice {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupmice' })
  idOnlTdupmice: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
