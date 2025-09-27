import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_prbbtn', schema: 'new_bpt' })
export class NewBptOnlPrbbtn {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_prbbtn' })
  idOnlPrbbtn: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
