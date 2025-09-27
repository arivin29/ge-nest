import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nippkph', schema: 'new_bpt' })
export class NewBptOnlNippkph {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nippkph' })
  idOnlNippkph: number;

  @Column({ name: 'nomor_dlh' })
  nomorDlh: string;

  @Column({ name: 'tgl_dlh' })
  tglDlh: string;
}
