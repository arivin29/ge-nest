import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ippohon', schema: 'new_bpt' })
export class NewBptOnlIppohon {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ippohon' })
  idOnlIppohon: number;

  @Column({ name: 'jumlah_pohon' })
  jumlahPohon: string;

  @Column({ name: 'tujuan_pemotongan' })
  tujuanPemotongan: string;
}
