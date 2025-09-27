import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipttk', schema: 'new_bpt' })
export class NewBptSkIzinSipttk {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipttk' })
  idSkIzinSipttk: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jumlah_ttk' })
  jumlahTtk: number;

  @Column({ name: 'masa_berlaku_sipttk' })
  masaBerlakuSipttk: string;

  @Column({ name: 'masa_berlaku_strttk' })
  masaBerlakuStrttk: string;

  @Column({ name: 'nama_sarana1' })
  namaSarana1: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'no_strttk' })
  noStrttk: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
