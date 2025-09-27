import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_niskp2btp', schema: 'new_bpt' })
export class NewBptOnlNiskp2btp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_niskp2btp' })
  idOnlNiskp2btp: number;

  @Column({ name: 'jml_tk' })
  jmlTk: string;

  @Column({ name: 'kompetensi_tk' })
  kompetensiTk: string;
}
