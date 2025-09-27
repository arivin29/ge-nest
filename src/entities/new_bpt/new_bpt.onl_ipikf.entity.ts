import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipikf', schema: 'new_bpt' })
export class NewBptOnlIpikf {
  @Column({ name: 'bekerja' })
  bekerja: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipikf' })
  idOnlIpikf: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ifi' })
  rekomIfi: string;
}
