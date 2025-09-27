import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin', schema: 'new_bpt' })
export class NewBptTIzin {
  @Column({ name: 'barcode', nullable: true })
  barcode: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'denda', nullable: true })
  denda: number;

  @PrimaryColumn({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis', nullable: true })
  idIzinJenis: number;

  @Column({ name: 'id_izin_posisi', nullable: true })
  idIzinPosisi: number;

  @Column({ name: 'id_izin_tipe', nullable: true })
  idIzinTipe: number;

  @Column({ name: 'id_kec', nullable: true })
  idKec: string;

  @Column({ name: 'id_kel', nullable: true })
  idKel: string;

  @Column({ name: 'id_kuasa', nullable: true })
  idKuasa: number;

  @Column({ name: 'id_pemohon', nullable: true })
  idPemohon: number;

  @Column({ name: 'id_pemohon_hubungan', nullable: true })
  idPemohonHubungan: number;

  @Column({ name: 'id_perusahaan', nullable: true })
  idPerusahaan: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'id_user_arsip', nullable: true })
  idUserArsip: number;

  @Column({ name: 'id_user_bo', nullable: true })
  idUserBo: number;

  @Column({ name: 'id_user_dintek', nullable: true })
  idUserDintek: number;

  @Column({ name: 'id_user_kabid', nullable: true })
  idUserKabid: number;

  @Column({ name: 'id_user_kadin', nullable: true })
  idUserKadin: number;

  @Column({ name: 'id_user_penerbitan', nullable: true })
  idUserPenerbitan: number;

  @Column({ name: 'id_user_penyerahan', nullable: true })
  idUserPenyerahan: number;

  @Column({ name: 'id_user_petugas', nullable: true })
  idUserPetugas: number;

  @Column({ name: 'id_user_sekdis', nullable: true })
  idUserSekdis: number;

  @Column({ name: 'id_user_verifikasi', nullable: true })
  idUserVerifikasi: number;

  @Column({ name: 'induak', nullable: true })
  induak: number;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'lokasi', nullable: true })
  lokasi: string;

  @Column({ name: 'luas_bangunan', nullable: true })
  luasBangunan: string;

  @Column({ name: 'luas_tanah', nullable: true })
  luasTanah: string;

  @Column({ name: 'no_izin', nullable: true })
  noIzin: string;

  @Column({ name: 'no_resi', nullable: true })
  noResi: string;

  @Column({ name: 'no_sk', nullable: true })
  noSk: string;

  @Column({ name: 'no_skrd', nullable: true })
  noSkrd: string;

  @Column({ name: 'no_skrd_denda', nullable: true })
  noSkrdDenda: string;

  @Column({ name: 'no_urut' })
  noUrut: number;

  @Column({ name: 'no_urut_resi', nullable: true })
  noUrutResi: number;

  @Column({ name: 'nomor_resi_pos', nullable: true })
  nomorResiPos: string;

  @Column({ name: 'nop', nullable: true })
  nop: string;

  @Column({ name: 'permasalahan', nullable: true })
  permasalahan: string;

  @Column({ name: 'peruntukan', nullable: true })
  peruntukan: string;

  @Column({ name: 'retribusi', nullable: true })
  retribusi: number;

  @Column({ name: 'selesai', nullable: true })
  selesai: string;

  @Column({ name: 'sourcer', nullable: true })
  sourcer: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'status_permohonan', nullable: true })
  statusPermohonan: string;

  @Column({ name: 'tanggal', nullable: true })
  tanggal: string;

  @Column({ name: 'tgl_ambil', nullable: true })
  tglAmbil: string;

  @Column({ name: 'tgl_arsip', nullable: true })
  tglArsip: string;

  @Column({ name: 'tgl_denda', nullable: true })
  tglDenda: string;

  @Column({ name: 'tgl_denda_dibayar', nullable: true })
  tglDendaDibayar: string;

  @Column({ name: 'tgl_fo_acc', nullable: true })
  tglFoAcc: string;

  @Column({ name: 'tgl_input', nullable: true })
  tglInput: string;

  @Column({ name: 'tgl_kbd', nullable: true })
  tglKbd: string;

  @Column({ name: 'tgl_ksb', nullable: true })
  tglKsb: string;

  @Column({ name: 'tgl_proses', nullable: true })
  tglProses: string;

  @Column({ name: 'tgl_rapat', nullable: true })
  tglRapat: string;

  @Column({ name: 'tgl_restribusi', nullable: true })
  tglRestribusi: string;

  @Column({ name: 'tgl_retribusi_diambil', nullable: true })
  tglRetribusiDiambil: string;

  @Column({ name: 'tgl_retribusi_dibayar', nullable: true })
  tglRetribusiDibayar: string;

  @Column({ name: 'tgl_retribusi_dikembalikan', nullable: true })
  tglRetribusiDikembalikan: string;

  @Column({ name: 'tgl_sekdis', nullable: true })
  tglSekdis: string;

  @Column({ name: 'tgl_sk', nullable: true })
  tglSk: string;

  @Column({ name: 'tgl_sk_diambil', nullable: true })
  tglSkDiambil: string;

  @Column({ name: 'tgl_survey', nullable: true })
  tglSurvey: string;

  @Column({ name: 'tgl_terbit', nullable: true })
  tglTerbit: string;

  @Column({ name: 'tgl_verifikasi', nullable: true })
  tglVerifikasi: string;

  @Column({ name: 'tinggi_bangunan', nullable: true })
  tinggiBangunan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
