import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rpikt', schema: 'new_bpt' })
export class NewBptOnlRpikt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rpikt' })
  idOnlRpikt: number;

  @Column({ name: 'jenis', nullable: true })
  jenis: string;

  @Column({ name: 'nomor_rekom', nullable: true })
  nomorRekom: string;

  @Column({ name: 'nomor_str', nullable: true })
  nomorStr: string;

  @Column({ name: 'tgl_str', nullable: true })
  tglStr: string;
}
