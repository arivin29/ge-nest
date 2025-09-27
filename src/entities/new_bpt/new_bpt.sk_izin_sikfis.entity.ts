import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sikfis', schema: 'new_bpt' })
export class NewBptSkIzinSikfis {
  @Column({ name: 'bekerja' })
  bekerja: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sikfis' })
  idSkIzinSikfis: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ifi' })
  rekomIfi: string;

  @Column({ name: 'sarana', nullable: true })
  sarana: string;
}
