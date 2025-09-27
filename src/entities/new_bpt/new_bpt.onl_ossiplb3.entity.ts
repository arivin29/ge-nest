import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiplb3', schema: 'new_bpt' })
export class NewBptOnlOssiplb3 {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiplb3' })
  idOnlOssiplb3: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
