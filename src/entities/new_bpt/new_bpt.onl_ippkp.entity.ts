import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ippkp', schema: 'new_bpt' })
export class NewBptOnlIppkp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ippkp' })
  idOnlIppkp: number;

  @Column({ name: 'nomor_dlh' })
  nomorDlh: string;

  @Column({ name: 'tgl_dlh' })
  tglDlh: string;
}
