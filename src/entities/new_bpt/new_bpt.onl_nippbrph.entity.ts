import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nippbrph', schema: 'new_bpt' })
export class NewBptOnlNippbrph {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nippbrph' })
  idOnlNippbrph: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
