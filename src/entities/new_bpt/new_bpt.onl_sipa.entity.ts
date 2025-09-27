import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipa', schema: 'new_bpt' })
export class NewBptOnlSipa {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipa' })
  idOnlSipa: number;

  @Column({ name: 'masa_berlaku_stra' })
  masaBerlakuStra: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'no_stra' })
  noStra: string;

  @Column({ name: 'praktek_ke' })
  praktekKe: number;

  @Column({ name: 'untuk_praktik' })
  untukPraktik: string;
}
