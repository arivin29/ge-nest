import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_prbbtn', schema: 'new_bpt' })
export class NewBptSkIzinPrbbtn {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_prbbtn' })
  idSkIzinPrbbtn: number;

  @Column({ name: 'prinsip' })
  prinsip: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
