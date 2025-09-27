import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_stpt', schema: 'new_bpt' })
export class NewBptOnlStpt {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'bahan' })
  bahan: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_stpt' })
  idOnlStpt: number;

  @Column({ name: 'jenis_perawatan' })
  jenisPerawatan: string;

  @Column({ name: 'jk' })
  jk: string;

  @Column({ name: 'kewarganegaraan' })
  kewarganegaraan: string;

  @Column({ name: 'pekerjaan' })
  pekerjaan: string;

  @Column({ name: 'pendidikan_formal' })
  pendidikanFormal: string;
}
