import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossslfbg', schema: 'new_bpt' })
export class NewBptSkIzinOssslfbg {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossslfbg' })
  idSkIzinOssslfbg: number;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
