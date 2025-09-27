import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sika', schema: 'new_bpt' })
export class NewBptOnlSika {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sika' })
  idOnlSika: number;

  @Column({ name: 'masa_berlaku_stra' })
  masaBerlakuStra: string;

  @Column({ name: 'nama_faskes' })
  namaFaskes: string;

  @Column({ name: 'no_stra' })
  noStra: string;

  @Column({ name: 'praktek_ke' })
  praktekKe: number;

  @Column({ name: 'untuk_praktik' })
  untukPraktik: string;
}
