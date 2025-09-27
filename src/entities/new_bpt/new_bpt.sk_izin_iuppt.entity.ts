import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iuppt', schema: 'new_bpt' })
export class NewBptSkIzinIuppt {
  @Column({ name: 'ho' })
  ho: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iuppt' })
  idSkIzinIuppt: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'luas' })
  luas: string;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
