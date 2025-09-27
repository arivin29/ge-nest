import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdg', schema: 'new_bpt' })
export class NewBptOnlTdg {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdg' })
  idOnlTdg: number;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'latitude' })
  latitude: string;

  @Column({ name: 'longitude' })
  longitude: string;

  @Column({ name: 'luas_gudang' })
  luasGudang: string;
}
