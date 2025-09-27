import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_osspaud', schema: 'new_bpt' })
export class NewBptOnlOsspaud {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_osspaud' })
  idOnlOsspaud: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
