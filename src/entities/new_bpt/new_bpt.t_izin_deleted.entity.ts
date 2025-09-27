import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_deleted', schema: 'new_bpt' })
export class NewBptTIzinDeleted {
  @Column({ name: 'barcode' })
  barcode: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'denda' })
  denda: number;

  @PrimaryColumn({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @Column({ name: 'id_izin_posisi' })
  idIzinPosisi: number;

  @Column({ name: 'id_izin_tipe' })
  idIzinTipe: number;

  @Column({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'id_kel' })
  idKel: string;

  @Column({ name: 'id_kuasa' })
  idKuasa: number;

  @Column({ name: 'id_pemohon' })
  idPemohon: number;

  @Column({ name: 'id_pemohon_hubungan' })
  idPemohonHubungan: number;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'id_user_bo' })
  idUserBo: number;

  @Column({ name: 'induak' })
  induak: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'lokasi' })
  lokasi: string;

  @Column({ name: 'luas_bangunan' })
  luasBangunan: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'no_izin' })
  noIzin: string;

  @Column({ name: 'no_resi' })
  noResi: string;

  @Column({ name: 'no_sk', nullable: true })
  noSk: string;

  @Column({ name: 'no_skrd', nullable: true })
  noSkrd: string;

  @Column({ name: 'no_skrd_denda', nullable: true })
  noSkrdDenda: string;

  @Column({ name: 'no_urut' })
  noUrut: number;

  @Column({ name: 'no_urut_resi' })
  noUrutResi: number;

  @Column({ name: 'permasalahan' })
  permasalahan: string;

  @Column({ name: 'peruntukan' })
  peruntukan: string;

  @Column({ name: 'retribusi' })
  retribusi: number;

  @Column({ name: 'selesai' })
  selesai: string;

  @Column({ name: 'sourcer' })
  sourcer: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'status_permohonan' })
  statusPermohonan: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'tgl_ambil' })
  tglAmbil: string;

  @Column({ name: 'tgl_arsip' })
  tglArsip: string;

  @Column({ name: 'tgl_denda' })
  tglDenda: string;

  @Column({ name: 'tgl_denda_dibayar' })
  tglDendaDibayar: string;

  @Column({ name: 'tgl_input', default: () => 'CURRENT_TIMESTAMP' })
  tglInput: string;

  @Column({ name: 'tgl_kbd' })
  tglKbd: string;

  @Column({ name: 'tgl_ksb' })
  tglKsb: string;

  @Column({ name: 'tgl_proses' })
  tglProses: string;

  @Column({ name: 'tgl_restribusi' })
  tglRestribusi: string;

  @Column({ name: 'tgl_retribusi_dibayar' })
  tglRetribusiDibayar: string;

  @Column({ name: 'tgl_sk' })
  tglSk: string;

  @Column({ name: 'tgl_sk_diambil' })
  tglSkDiambil: string;

  @Column({ name: 'tgl_terbit' })
  tglTerbit: string;

  @Column({ name: 'tgl_verifikasi' })
  tglVerifikasi: string;

  @Column({ name: 'tinggi_bangunan' })
  tinggiBangunan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
