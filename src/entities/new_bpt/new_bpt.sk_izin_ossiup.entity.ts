import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiup', schema: 'new_bpt' })
export class NewBptSkIzinOssiup {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiup' })
  idSkIzinOssiup: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_kerjasama' })
  jenisKerjasama: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'kapasitas_pop' })
  kapasitasPop: string;

  @Column({ name: 'lokasi_kerjasama' })
  lokasiKerjasama: string;

  @Column({ name: 'luas_lahan' })
  luasLahan: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
