import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipblkn', schema: 'new_bpt' })
export class NewBptSkIzinIpblkn {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipblkn' })
  idSkIzinIpblkn: number;

  @Column({ name: 'jenis_izin' })
  jenisIzin: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'perhatikan' })
  perhatikan: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;

  @Column({ name: 'tgl_srt' })
  tglSrt: string;
}
