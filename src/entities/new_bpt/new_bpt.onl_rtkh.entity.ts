import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rtkh', schema: 'new_bpt' })
export class NewBptOnlRtkh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rtkh' })
  idOnlRtkh: number;

  @Column({ name: 'no' })
  no: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
