import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_osspkbm', schema: 'new_bpt' })
export class NewBptSkIzinOsspkbm {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_osspkbm' })
  idSkIzinOsspkbm: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nib', nullable: true })
  nib: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tanggal_pertek', nullable: true })
  tanggalPertek: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;
}
