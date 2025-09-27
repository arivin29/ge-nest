import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiplb3bbp', schema: 'new_bpt' })
export class NewBptOnlOssiplb3bbp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiplb3bbp' })
  idOnlOssiplb3bbp: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
