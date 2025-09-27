import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ikrem', schema: 'new_bpt' })
export class NewBptOnlIkrem {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ikrem' })
  idOnlIkrem: number;

  @Column({ name: 'no_surat' })
  noSurat: string;

  @Column({ name: 'tgl_kermasi' })
  tglKermasi: string;
}
