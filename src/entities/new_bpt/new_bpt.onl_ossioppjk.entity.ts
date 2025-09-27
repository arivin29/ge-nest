import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossioppjk', schema: 'new_bpt' })
export class NewBptOnlOssioppjk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossioppjk' })
  idOnlOssioppjk: number;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;
}
