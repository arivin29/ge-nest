import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiplb3', schema: 'new_bpt' })
export class NewBptSkIzinOssiplb3 {
  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiplb3' })
  idSkIzinOssiplb3: number;

  @Column({ name: 'jabatan', nullable: true })
  jabatan: string;

  @Column({ name: 'jenis_usaha', nullable: true })
  jenisUsaha: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'untuk', nullable: true })
  untuk: string;
}
