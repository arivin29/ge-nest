import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iuppt', schema: 'new_bpt' })
export class NewBptOnlIuppt {
  @Column({ name: 'ho' })
  ho: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iuppt' })
  idOnlIuppt: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'luas' })
  luas: string;

  @Column({ name: 'status' })
  status: string;
}
