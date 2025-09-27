import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sippm', schema: 'new_bpt' })
export class NewBptSkIzinSippm {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sippm' })
  idSkIzinSippm: number;

  @Column({ name: 'nama_sarana', nullable: true })
  namaSarana: string;

  @Column({ name: 'no_pertek', nullable: true })
  noPertek: string;

  @Column({ name: 'no_ppni' })
  noPpni: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;
}
