import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiutp', schema: 'new_bpt' })
export class NewBptOnlOssiutp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiutp' })
  idOnlOssiutp: number;

  @Column({ name: 'jenis_usaha', nullable: true })
  jenisUsaha: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
