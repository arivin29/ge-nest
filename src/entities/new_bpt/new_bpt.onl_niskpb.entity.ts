import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_niskpb', schema: 'new_bpt' })
export class NewBptOnlNiskpb {
  @Column({ name: 'forklif' })
  forklif: number;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_niskpb' })
  idOnlNiskpb: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'izin' })
  izin: string;

  @Column({ name: 'listrik' })
  listrik: number;

  @Column({ name: 'luas_gudang' })
  luasGudang: number;

  @Column({ name: 'sumber_air' })
  sumberAir: string;
}
