import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iutd', schema: 'new_bpt' })
export class NewBptOnlIutd {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iutd' })
  idOnlIutd: number;

  @Column({ name: 'nomor_dinkes' })
  nomorDinkes: string;

  @Column({ name: 'nomor_pmi_jabar' })
  nomorPmiJabar: string;

  @Column({ name: 'nomor_pmi_pusat' })
  nomorPmiPusat: string;

  @Column({ name: 'tgl_dinkes' })
  tglDinkes: string;

  @Column({ name: 'tgl_pmi_jabar' })
  tglPmiJabar: string;

  @Column({ name: 'tgl_pmi_pusat' })
  tglPmiPusat: string;
}
