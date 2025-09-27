import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iprth', schema: 'new_bpt' })
export class NewBptOnlIprth {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iprth' })
  idOnlIprth: number;

  @Column({ name: 'jumlah_pohon' })
  jumlahPohon: string;

  @Column({ name: 'tujuan_pemotongan' })
  tujuanPemotongan: string;
}
