import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sikfis', schema: 'new_bpt' })
export class NewBptOnlSikfis {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sikfis' })
  idOnlSikfis: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ifi' })
  rekomIfi: string;
}
