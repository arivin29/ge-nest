import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossipk', schema: 'new_bpt' })
export class NewBptOnlOssipk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossipk' })
  idOnlOssipk: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
