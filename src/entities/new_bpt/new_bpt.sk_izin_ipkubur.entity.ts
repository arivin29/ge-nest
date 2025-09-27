import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipkubur', schema: 'new_bpt' })
export class NewBptSkIzinIpkubur {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipkubur' })
  idSkIzinIpkubur: number;

  @Column({ name: 'jk_pemohon', nullable: true })
  jkPemohon: string;

  @Column({ name: 'lokasi_penguburan' })
  lokasiPenguburan: string;

  @Column({ name: 'nama_jenazah' })
  namaJenazah: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tgl_no' })
  tglNo: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;
}
