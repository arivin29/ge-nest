import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iubudphor', schema: 'new_bpt' })
export class NewBptOnlIubudphor {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iubudphor' })
  idOnlIubudphor: number;

  @Column({ name: 'no_dlh' })
  noDlh: string;
}
