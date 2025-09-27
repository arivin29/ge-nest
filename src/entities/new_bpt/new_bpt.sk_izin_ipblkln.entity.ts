import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipblkln', schema: 'new_bpt' })
export class NewBptSkIzinIpblkln {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipblkln' })
  idSkIzinIpblkln: number;

  @Column({ name: 'jenis_program' })
  jenisProgram: string;

  @Column({ name: 'jk' })
  jk: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'nomor_dis' })
  nomorDis: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_dis' })
  tglDis: string;
}
