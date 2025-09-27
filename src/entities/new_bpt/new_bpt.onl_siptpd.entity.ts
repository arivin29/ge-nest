import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_siptpd', schema: 'new_bpt' })
export class NewBptOnlSiptpd {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_siptpd' })
  idOnlSiptpd: number;

  @Column({ name: 'nomor_strttd' })
  nomorStrttd: string;
}
