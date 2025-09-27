import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiuhortikultura', schema: 'new_bpt' })
export class NewBptOnlOssiuhortikultura {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiuhortikultura' })
  idOnlOssiuhortikultura: number;

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
