import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossipk', schema: 'new_bpt' })
export class NewBptSkIzinOssipk {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossipk' })
  idSkIzinOssipk: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
