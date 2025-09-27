import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iujk', schema: 'new_bpt' })
export class NewBptSkIzinIujk {
  @Column({ name: 'bidang_pekerjaan' })
  bidangPekerjaan: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iujk' })
  idSkIzinIujk: number;

  @Column({ name: 'kegiatan_usaha' })
  kegiatanUsaha: string;

  @Column({ name: 'klasifikasi' })
  klasifikasi: string;

  @Column({ name: 'kualifikasi' })
  kualifikasi: string;

  @Column({ name: 'nama1' })
  nama1: string;

  @Column({ name: 'nama2' })
  nama2: string;

  @Column({ name: 'nama3' })
  nama3: string;

  @Column({ name: 'nama_pekerjaan' })
  namaPekerjaan: string;

  @Column({ name: 'namapenanggungjawab' })
  namapenanggungjawab: string;

  @Column({ name: 'nilai_paket_pekerjaan' })
  nilaiPaketPekerjaan: string;

  @Column({ name: 'no' })
  no: number;

  @Column({ name: 'no_belakang' })
  noBelakang: string;

  @Column({ name: 'nomor_sbu' })
  nomorSbu: string;

  @Column({ name: 'nomor_tdp' })
  nomorTdp: string;

  @Column({ name: 'pjt' })
  pjt: string;

  @Column({ name: 'status_perusahaan' })
  statusPerusahaan: string;

  @Column({ name: 'sub_bidang_pekerjaan' })
  subBidangPekerjaan: string;

  @Column({ name: 'tahun' })
  tahun: string;
}
