import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirpih', schema: 'new_bpt' })
export class NewBptOnlNirpih {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirpih' })
  idOnlNirpih: number;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_siup' })
  nomorSiup: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;

  @Column({ name: 'tgl_siup' })
  tglSiup: string;
}
