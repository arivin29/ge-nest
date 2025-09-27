import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tdg', schema: 'new_bpt' })
export class NewBptSkIzinTdg {
  @Column({ name: 'gol_gudang' })
  golGudang: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_tdg' })
  idSkIzinTdg: number;

  @Column({ name: 'kapasitas_gudang' })
  kapasitasGudang: string;

  @Column({ name: 'lat' })
  lat: string;

  @Column({ name: 'lon' })
  lon: string;

  @Column({ name: 'luas_gudang' })
  luasGudang: string;
}
