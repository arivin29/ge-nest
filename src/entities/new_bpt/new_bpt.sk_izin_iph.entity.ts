import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iph', schema: 'new_bpt' })
export class NewBptSkIzinIph {
  @Column({ name: 'baplapangan_nomor' })
  baplapanganNomor: string;

  @Column({ name: 'baplapangan_tgl' })
  baplapanganTgl: string;

  @Column({ name: 'bar_nomor' })
  barNomor: string;

  @Column({ name: 'bar_tgl' })
  barTgl: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iph' })
  idSkIzinIph: number;

  @Column({ name: 'penanggung_jawab', nullable: true })
  penanggungJawab: string;
}
