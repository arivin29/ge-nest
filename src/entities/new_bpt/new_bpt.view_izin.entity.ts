import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'view_izin', schema: 'new_bpt' })
export class NewBptViewIzin {
  @Column({ name: 'barcode', nullable: true })
  barcode: string;

  @PrimaryColumn({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis', nullable: true })
  idIzinJenis: number;

  @Column({ name: 'id_izin_posisi', nullable: true })
  idIzinPosisi: number;

  @Column({ name: 'id_izin_tipe', nullable: true })
  idIzinTipe: number;

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

  @Column({ name: 'induak', nullable: true })
  induak: number;

  @Column({ name: 'jenis', nullable: true })
  jenis: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'lokasi', nullable: true })
  lokasi: string;

  @Column({ name: 'no_izin', nullable: true })
  noIzin: string;

  @Column({ name: 'no_resi', nullable: true })
  noResi: string;

  @Column({ name: 'no_sk', nullable: true })
  noSk: string;

  @Column({ name: 'no_urut' })
  noUrut: number;

  @Column({ name: 'no_urut_resi', nullable: true })
  noUrutResi: number;

  @Column({ name: 'pemohon' })
  pemohon: string;

  @Column({ name: 'permasalahan', nullable: true })
  permasalahan: string;

  @Column({ name: 'peruntukan', nullable: true })
  peruntukan: string;

  @Column({ name: 'perusahaan', nullable: true })
  perusahaan: string;

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

  @Column({ name: 'tgl_input', nullable: true })
  tglInput: string;

  @Column({ name: 'tgl_kbd', nullable: true })
  tglKbd: string;

  @Column({ name: 'tgl_ksb', nullable: true })
  tglKsb: string;

  @Column({ name: 'tgl_proses', nullable: true })
  tglProses: string;

  @Column({ name: 'tgl_restribusi', nullable: true })
  tglRestribusi: string;

  @Column({ name: 'tgl_sk', nullable: true })
  tglSk: string;

  @Column({ name: 'tipe' })
  tipe: string;
}
