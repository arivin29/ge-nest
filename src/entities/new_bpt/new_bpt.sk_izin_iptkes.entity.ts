import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iptkes', schema: 'new_bpt' })
export class NewBptSkIzinIptkes {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iptkes' })
  idSkIzinIptkes: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jenis_praktek', nullable: true })
  jenisPraktek: string;

  @Column({ name: 'nama_faskes', nullable: true })
  namaFaskes: string;

  @Column({ name: 'no_rekom', nullable: true })
  noRekom: string;

  @Column({ name: 'no_str', nullable: true })
  noStr: string;

  @Column({ name: 'praktek_ke', nullable: true })
  praktekKe: boolean;

  @Column({ name: 'tgl_rekom', nullable: true })
  tglRekom: string;

  @Column({ name: 'tgl_str', nullable: true })
  tglStr: string;
}
