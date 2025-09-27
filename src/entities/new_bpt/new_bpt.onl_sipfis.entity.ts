import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipfis', schema: 'new_bpt' })
export class NewBptOnlSipfis {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipfis' })
  idOnlSipfis: number;

  @Column({ name: 'jenis_sip', nullable: true })
  jenisSip: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ifi' })
  rekomIfi: string;
}
