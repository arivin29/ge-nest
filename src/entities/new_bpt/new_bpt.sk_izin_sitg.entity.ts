import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sitg', schema: 'new_bpt' })
export class NewBptSkIzinSitg {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sitg' })
  idSkIzinSitg: number;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'rekom_asos' })
  rekomAsos: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;
}
