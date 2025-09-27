import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptkm', schema: 'new_bpt' })
export class NewBptOnlIptkm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptkm' })
  idOnlIptkm: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'praktek', nullable: true })
  praktek: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
