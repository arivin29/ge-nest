import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossito', schema: 'new_bpt' })
export class NewBptSkIzinOssito {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossito' })
  idSkIzinOssito: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sipttk' })
  noSipttk: string;

  @Column({ name: 'no_strttk' })
  noStrttk: string;

  @Column({ name: 'penanggung_jwb' })
  penanggungJwb: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tgl_sipttk' })
  tglSipttk: string;

  @Column({ name: 'tgl_strttk' })
  tglStrttk: string;
}
