import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiprtak', schema: 'new_bpt' })
export class NewBptOnlOssiprtak {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiprtak' })
  idOnlOssiprtak: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
