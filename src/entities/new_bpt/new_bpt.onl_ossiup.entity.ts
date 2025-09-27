import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiup', schema: 'new_bpt' })
export class NewBptOnlOssiup {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiup' })
  idOnlOssiup: number;

  @Column({ name: 'kapasitas_kandang' })
  kapasitasKandang: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
