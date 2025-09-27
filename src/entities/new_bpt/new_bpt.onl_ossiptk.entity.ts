import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiptk', schema: 'new_bpt' })
export class NewBptOnlOssiptk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiptk' })
  idOnlOssiptk: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'lahan' })
  lahan: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nama_tk', nullable: true })
  namaTk: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'penanggung_jawab', nullable: true })
  penanggungJawab: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
