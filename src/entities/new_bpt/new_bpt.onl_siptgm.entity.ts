import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_siptgm', schema: 'new_bpt' })
export class NewBptOnlSiptgm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_siptgm' })
  idOnlSiptgm: number;

  @Column({ name: 'nomor_strtgm' })
  nomorStrtgm: string;

  @Column({ name: 'pada_tgl' })
  padaTgl: string;

  @Column({ name: 'pendidikan' })
  pendidikan: string;
}
