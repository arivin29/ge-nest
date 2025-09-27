import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_osspkbm', schema: 'new_bpt' })
export class NewBptOnlOsspkbm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_osspkbm' })
  idOnlOsspkbm: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
