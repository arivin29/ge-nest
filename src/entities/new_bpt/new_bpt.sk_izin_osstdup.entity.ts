import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_osstdup', schema: 'new_bpt' })
export class NewBptSkIzinOsstdup {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_osstdup' })
  idSkIzinOsstdup: number;

  @Column({ name: 'jabatan', nullable: true })
  jabatan: string;

  @Column({ name: 'jenis_sk', nullable: true })
  jenisSk: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kode', nullable: true })
  kode: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
