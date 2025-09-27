import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossia', schema: 'new_bpt' })
export class NewBptSkIzinOssia {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossia' })
  idSkIzinOssia: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sipa', nullable: true })
  noSipa: string;

  @Column({ name: 'no_strta' })
  noStrta: string;

  @Column({ name: 'penanggung_jwb', nullable: true })
  penanggungJwb: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tgl_sipa', nullable: true })
  tglSipa: string;

  @Column({ name: 'tgl_strtaa', nullable: true })
  tglStrtaa: string;
}
