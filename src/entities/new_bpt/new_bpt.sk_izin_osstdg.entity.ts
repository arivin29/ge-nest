import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_osstdg', schema: 'new_bpt' })
export class NewBptSkIzinOsstdg {
  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'gol_gudang' })
  golGudang: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_osstdg' })
  idSkIzinOsstdg: number;

  @Column({ name: 'jenis_barang' })
  jenisBarang: string;

  @Column({ name: 'kapasitas_gudang' })
  kapasitasGudang: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'lat' })
  lat: string;

  @Column({ name: 'lon' })
  lon: string;

  @Column({ name: 'luas_gudang' })
  luasGudang: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
