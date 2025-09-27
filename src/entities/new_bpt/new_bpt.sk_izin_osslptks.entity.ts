import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_osslptks', schema: 'new_bpt' })
export class NewBptSkIzinOsslptks {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_osslptks' })
  idSkIzinOsslptks: number;

  @Column({ name: 'jenis_program', nullable: true })
  jenisProgram: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'perihal' })
  perihal: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
