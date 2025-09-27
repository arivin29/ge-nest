import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptkes', schema: 'new_bpt' })
export class NewBptOnlIptkes {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_m_izin_jenis_nakes' })
  idMIzinJenisNakes: number;

  @PrimaryColumn({ name: 'id_onl_iptkes' })
  idOnlIptkes: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jenis_praktek', nullable: true })
  jenisPraktek: string;

  @Column({ name: 'nama_faskes' })
  namaFaskes: string;

  @Column({ name: 'no_rekom', nullable: true })
  noRekom: string;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'praktek_ke' })
  praktekKe: boolean;

  @Column({ name: 'tgl_rekom', nullable: true })
  tglRekom: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
