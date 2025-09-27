import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossilingkungan', schema: 'new_bpt' })
export class NewBptSkIzinOssilingkungan {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossilingkungan' })
  idSkIzinOssilingkungan: number;

  @Column({ name: 'jenis_usaha', nullable: true })
  jenisUsaha: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_ilingkungan' })
  noIlingkungan: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl_ilingkungan' })
  tglIlingkungan: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
