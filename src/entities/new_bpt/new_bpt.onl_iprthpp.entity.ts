import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iprthpp', schema: 'new_bpt' })
export class NewBptOnlIprthpp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iprthpp' })
  idOnlIprthpp: number;

  @Column({ name: 'jumlah_pohon' })
  jumlahPohon: string;

  @Column({ name: 'tujuan_pemotongan' })
  tujuanPemotongan: string;
}
