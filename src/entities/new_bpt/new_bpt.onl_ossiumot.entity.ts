import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiumot', schema: 'new_bpt' })
export class NewBptOnlOssiumot {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiumot' })
  idOnlOssiumot: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
