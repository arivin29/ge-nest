import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipttk', schema: 'new_bpt' })
export class NewBptOnlSipttk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipttk' })
  idOnlSipttk: number;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'no_strttk' })
  noStrttk: string;

  @Column({ name: 'praktek_ke' })
  praktekKe: boolean;
}
