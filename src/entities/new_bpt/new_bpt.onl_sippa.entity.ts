import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sippa', schema: 'new_bpt' })
export class NewBptOnlSippa {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sippa' })
  idOnlSippa: number;

  @Column({ name: 'nomor_strtgm' })
  nomorStrtgm: string;

  @Column({ name: 'pada_tgl' })
  padaTgl: string;

  @Column({ name: 'pendidikan' })
  pendidikan: string;
}
