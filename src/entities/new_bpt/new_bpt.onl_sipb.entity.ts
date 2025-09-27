import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipb', schema: 'new_bpt' })
export class NewBptOnlSipb {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipb' })
  idOnlSipb: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ibi' })
  rekomIbi: string;

  @Column({ name: 'tempat_kerja' })
  tempatKerja: string;
}
