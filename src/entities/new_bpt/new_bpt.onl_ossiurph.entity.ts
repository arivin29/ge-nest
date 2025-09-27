import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiurph', schema: 'new_bpt' })
export class NewBptOnlOssiurph {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiurph' })
  idOnlOssiurph: number;

  @Column({ name: 'kapasitas_populasi', nullable: true })
  kapasitasPopulasi: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'luas_bangunan', nullable: true })
  luasBangunan: string;

  @Column({ name: 'luas_tanah', nullable: true })
  luasTanah: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'produksi', nullable: true })
  produksi: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tka', nullable: true })
  tka: number;

  @Column({ name: 'tki', nullable: true })
  tki: number;
}
