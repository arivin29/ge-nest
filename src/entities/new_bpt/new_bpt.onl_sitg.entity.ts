import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sitg', schema: 'new_bpt' })
export class NewBptOnlSitg {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sitg' })
  idOnlSitg: number;

  @Column({ name: 'rekom_asos' })
  rekomAsos: string;
}
