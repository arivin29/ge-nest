import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_pbg', schema: 'new_bpt' })
export class NewBptSkIzinPbg {
  @Column({ name: 'alamat_pbg' })
  alamatPbg: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_pbg' })
  idSkIzinPbg: number;

  @Column({ name: 'kepemilikan' })
  kepemilikan: string;

  @Column({ name: 'nama_pemohon' })
  namaPemohon: string;

  @Column({ name: 'nama_perusahaan' })
  namaPerusahaan: string;

  @Column({ name: 'no_pbg' })
  noPbg: string;

  @Column({ name: 'no_slf' })
  noSlf: string;

  @Column({ name: 'noreg_pbg' })
  noregPbg: string;

  @Column({ name: 'plus_desa', nullable: true })
  plusDesa: string;

  @Column({ name: 'plus_kec', nullable: true })
  plusKec: string;

  @Column({ name: 'revisi', nullable: true })
  revisi: string;

  @Column({ name: 'tanggal_pbg', nullable: true })
  tanggalPbg: string;

  @Column({ name: 'tanggal_slf', nullable: true })
  tanggalSlf: string;
}
