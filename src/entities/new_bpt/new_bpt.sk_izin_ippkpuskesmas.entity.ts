import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ippkpuskesmas', schema: 'new_bpt' })
export class NewBptSkIzinIppkpuskesmas {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'akta_pendirian' })
  aktaPendirian: string;

  @Column({ name: 'bap' })
  bap: string;

  @Column({ name: 'bap_io_tgl' })
  bapIoTgl: string;

  @Column({ name: 'bap_lapangan_tgl' })
  bapLapanganTgl: string;

  @Column({ name: 'bapl' })
  bapl: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ippkpuskesmas' })
  idSkIzinIppkpuskesmas: number;

  @Column({ name: 'io' })
  io: string;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'klasifikasi_klinik' })
  klasifikasiKlinik: string;

  @Column({ name: 'klasifikasi_wilayah_kerja' })
  klasifikasiWilayahKerja: string;

  @Column({ name: 'klinik' })
  klinik: string;

  @Column({ name: 'nama_apoteker' })
  namaApoteker: string;

  @Column({ name: 'nama_d_a' })
  namaDA: string;

  @Column({ name: 'nama_d_b' })
  namaDB: string;

  @Column({ name: 'namakes' })
  namakes: string;

  @Column({ name: 'no_surat_imk' })
  noSuratImk: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'nomor_apoteker' })
  nomorApoteker: string;

  @Column({ name: 'nomor_d_a' })
  nomorDA: string;

  @Column({ name: 'nomor_d_b' })
  nomorDB: string;

  @Column({ name: 'nomor_imk' })
  nomorImk: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'puskesmas' })
  puskesmas: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'rekom_izin_no' })
  rekomIzinNo: string;

  @Column({ name: 'rekom_izin_tgl' })
  rekomIzinTgl: string;

  @Column({ name: 'sewa' })
  sewa: string;

  @Column({ name: 'sewa_menyewa' })
  sewaMenyewa: string;

  @Column({ name: 'sewa_menyewa2' })
  sewaMenyewa2: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
