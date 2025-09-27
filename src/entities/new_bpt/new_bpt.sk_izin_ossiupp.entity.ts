import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiupp', schema: 'new_bpt' })
export class NewBptSkIzinOssiupp {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiupp' })
  idSkIzinOssiupp: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
