import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iptkm', schema: 'new_bpt' })
export class NewBptSkIzinIptkm {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iptkm' })
  idSkIzinIptkm: number;

  @Column({ name: 'nama_sarana', nullable: true })
  namaSarana: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'praktik' })
  praktik: string;
}
