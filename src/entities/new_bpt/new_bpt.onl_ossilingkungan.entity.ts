import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossilingkungan', schema: 'new_bpt' })
export class NewBptOnlOssilingkungan {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossilingkungan' })
  idOnlOssilingkungan: number;

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
