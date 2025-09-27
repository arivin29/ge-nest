import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipfm', schema: 'new_bpt' })
export class NewBptOnlSipfm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sifm' })
  idOnlSifm: number;

  @Column({ name: 'no_str' })
  noStr: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'praktek', nullable: true })
  praktek: string;

  @Column({ name: 'rekom_afi' })
  rekomAfi: string;
}
