import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossilok', schema: 'new_bpt' })
export class NewBptSkIzinOssilok {
  @Column({ name: 'adm' })
  adm: string;

  @Column({ name: 'alatmesin', nullable: true })
  alatmesin: number;

  @Column({ name: 'bangunan', nullable: true })
  bangunan: number;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossilok' })
  idSkIzinOssilok: number;

  @Column({ name: 'kepemilikan' })
  kepemilikan: number;

  @Column({ name: 'luas', nullable: true })
  luas: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_ilok' })
  noIlok: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'pojok', nullable: true })
  pojok: string;

  @Column({ name: 'tanah', nullable: true })
  tanah: number;

  @Column({ name: 'tembusan' })
  tembusan: string;

  @Column({ name: 'tgl_ilok' })
  tglIlok: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tkp', nullable: true })
  tkp: number;

  @Column({ name: 'tkw', nullable: true })
  tkw: number;
}
