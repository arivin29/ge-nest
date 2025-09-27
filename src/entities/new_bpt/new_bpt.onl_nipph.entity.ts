import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nipph', schema: 'new_bpt' })
export class NewBptOnlNipph {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nipph' })
  idOnlNipph: number;

  @Column({ name: 'nomor_dlh' })
  nomorDlh: string;

  @Column({ name: 'tgl_dlh' })
  tglDlh: string;
}
