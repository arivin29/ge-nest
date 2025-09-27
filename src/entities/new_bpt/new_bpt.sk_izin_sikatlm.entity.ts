import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sikatlm', schema: 'new_bpt' })
export class NewBptSkIzinSikatlm {
  @Column({ name: 'bekerja' })
  bekerja: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sikatlm' })
  idSkIzinSikatlm: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'sarana' })
  sarana: string;
}
