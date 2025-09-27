import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iurshwn', schema: 'new_bpt' })
export class NewBptOnlIurshwn {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iurshwn' })
  idOnlIurshwn: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
