import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirdoc', schema: 'new_bpt' })
export class NewBptSkIzinNirdoc {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'Angka_Pengenal' })
  Angka_Pengenal: string;

  @Column({ name: 'berat_bersih' })
  beratBersih: string;

  @Column({ name: 'berat_kotor' })
  beratKotor: string;

  @Column({ name: 'bibit_asal' })
  bibitAsal: string;

  @Column({ name: 'galur' })
  galur: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirdoc' })
  idSkIzinNirdoc: number;

  @Column({ name: 'ikh' })
  ikh: string;

  @Column({ name: 'iup' })
  iup: string;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'jenis_rek' })
  jenisRek: string;

  @Column({ name: 'jmlh' })
  jmlh: string;

  @Column({ name: 'jumlah' })
  jumlah: string;

  @Column({ name: 'kajian_teknis' })
  kajianTeknis: string;

  @Column({ name: 'keputusan' })
  keputusan: string;

  @Column({ name: 'lokasi_masuk' })
  lokasiMasuk: string;

  @Column({ name: 'Negara_Asal' })
  Negara_Asal: string;

  @Column({ name: 'pelabuhan_asal' })
  pelabuhanAsal: string;

  @Column({ name: 'pelabuhan_tujuan' })
  pelabuhanTujuan: string;

  @Column({ name: 'pemasukkan' })
  pemasukkan: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'perizinan_dimiliki' })
  perizinanDimiliki: string;

  @Column({ name: 'point1' })
  point1: string;

  @Column({ name: 'prov_masuk' })
  provMasuk: string;

  @Column({ name: 'Sewa_menyewa' })
  SewaMenyewa: string;

  @Column({ name: 'Skdu' })
  Skdu: string;

  @Column({ name: 'skkh' })
  skkh: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'Tdp' })
  Tdp: string;

  @Column({ name: 'tgl_aktependirian', nullable: true })
  tglAktependirian: string;

  @Column({ name: 'tgl_kajian_teknis', nullable: true })
  tglKajianTeknis: string;

  @Column({ name: 'tgl_nomor', nullable: true })
  tglNomor: string;

  @Column({ name: 'tgl_pemasukan' })
  tglPemasukan: string;

  @Column({ name: 'tgl_ukl', nullable: true })
  tglUkl: string;

  @Column({ name: 'tgls', nullable: true })
  tgls: string;

  @Column({ name: 'ukl_upl' })
  uklUpl: string;
}
