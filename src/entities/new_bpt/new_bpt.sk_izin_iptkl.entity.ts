import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iptkl', schema: 'new_bpt' })
export class NewBptSkIzinIptkl {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iptkl' })
  idSkIzinIptkl: number;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'sbg' })
  sbg: string;

  @Column({ name: 'sub' })
  sub: string;

  @Column({ name: 'tgl_str' })
  tglStr: string;
}
