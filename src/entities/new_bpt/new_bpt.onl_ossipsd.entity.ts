import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossipsd', schema: 'new_bpt' })
export class NewBptOnlOssipsd {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossipsd' })
  idOnlOssipsd: number;

  @Column({ name: 'nama_sd' })
  namaSd: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
