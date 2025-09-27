import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iutd', schema: 'new_bpt' })
export class NewBptSkIzinIutd {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iutd' })
  idSkIzinIutd: number;

  @Column({ name: 'klasifikasi' })
  klasifikasi: string;

  @Column({ name: 'no_dinkes' })
  noDinkes: string;

  @Column({ name: 'no_dinprov' })
  noDinprov: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'pemilik' })
  pemilik: string;

  @Column({ name: 'penanggung' })
  penanggung: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl_dinkes', nullable: true })
  tglDinkes: string;

  @Column({ name: 'tgl_dinprov', nullable: true })
  tglDinprov: string;

  @Column({ name: 'tgl_reg', nullable: true })
  tglReg: string;
}
