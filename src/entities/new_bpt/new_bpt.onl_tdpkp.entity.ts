import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdpkp', schema: 'new_bpt' })
export class NewBptOnlTdpkp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tdpkp' })
  idOnlTdpkp: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
