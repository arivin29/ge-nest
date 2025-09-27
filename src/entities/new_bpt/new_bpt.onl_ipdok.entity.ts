import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipdok', schema: 'new_bpt' })
export class NewBptOnlIpdok {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipdok' })
  idOnlIpdok: number;

  @Column({ name: 'masa_berlaku_str' })
  masaBerlakuStr: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'norekom_pdgi', nullable: true })
  norekomPdgi: string;

  @Column({ name: 'praktek_ke' })
  praktekKe: boolean;
}
