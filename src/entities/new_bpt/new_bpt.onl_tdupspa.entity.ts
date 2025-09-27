import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdupspa', schema: 'new_bpt' })
export class NewBptOnlTdupspa {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdupspa' })
  idOnlTdupspa: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
