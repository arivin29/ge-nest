import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ikag', schema: 'new_bpt' })
export class NewBptSkIzinIkag {
  @Column({ name: 'bekerja' })
  bekerja: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ikag' })
  idSkIzinIkag: number;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'sarana' })
  sarana: string;
}
