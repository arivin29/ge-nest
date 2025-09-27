import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sikb', schema: 'new_bpt' })
export class NewBptSkIzinSikb {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sikb' })
  idSkIzinSikb: number;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ibi' })
  rekomIbi: string;

  @Column({ name: 'tempat_kerja' })
  tempatKerja: string;
}
