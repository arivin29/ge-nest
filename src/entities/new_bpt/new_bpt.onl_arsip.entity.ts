import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_arsip', schema: 'new_bpt' })
export class NewBptOnlArsip {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_arsip' })
  idOnlArsip: number;

  @Column({ name: 'no_surat' })
  noSurat: string;

  @Column({ name: 'tgl_kermasi' })
  tglKermasi: string;
}
