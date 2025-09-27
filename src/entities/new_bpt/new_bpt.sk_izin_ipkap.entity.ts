import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipkap', schema: 'new_bpt' })
export class NewBptSkIzinIpkap {
  @Column({ name: 'almakam', nullable: true })
  almakam: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipkap' })
  idSkIzinIpkap: number;

  @Column({ name: 'jml_kav' })
  jmlKav: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl_no' })
  tglNo: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;
}
