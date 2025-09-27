import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossipal', schema: 'new_bpt' })
export class NewBptSkIzinOssipal {
  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossipal' })
  idSkIzinOssipal: number;

  @Column({ name: 'jabatan', nullable: true })
  jabatan: string;

  @Column({ name: 'jenis_usaha', nullable: true })
  jenisUsaha: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_shilang', nullable: true })
  noShilang: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'sumber_air', nullable: true })
  sumberAir: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tgl_shilang', nullable: true })
  tglShilang: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
