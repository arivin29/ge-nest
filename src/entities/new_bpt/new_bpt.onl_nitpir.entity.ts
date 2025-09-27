import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nitpir', schema: 'new_bpt' })
export class NewBptOnlNitpir {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nitpir' })
  idOnlNitpir: number;

  @Column({ name: 'no' })
  no: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
