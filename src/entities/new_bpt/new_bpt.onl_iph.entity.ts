import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iph', schema: 'new_bpt' })
export class NewBptOnlIph {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iph' })
  idOnlIph: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
