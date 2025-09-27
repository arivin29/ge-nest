import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirmhtn', schema: 'new_bpt' })
export class NewBptSkIzinNirmhtn {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'Angka_Pengenal' })
  Angka_Pengenal: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirmhtn' })
  idSkIzinNirmhtn: number;

  @Column({ name: 'ikh' })
  ikh: string;

  @Column({ name: 'iup' })
  iup: string;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'jenis_ras' })
  jenisRas: string;

  @Column({ name: 'jmlh' })
  jmlh: string;

  @Column({ name: 'jumlah' })
  jumlah: string;

  @Column({ name: 'Kajian_Teknis' })
  Kajian_Teknis: string;

  @Column({ name: 'keputusan' })
  keputusan: string;

  @Column({ name: 'ket' })
  ket: string;

  @Column({ name: 'negara' })
  negara: string;

  @Column({ name: 'Negara_Asal' })
  Negara_Asal: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'pelabuhan' })
  pelabuhan: string;

  @Column({ name: 'pemasukkan' })
  pemasukkan: string;

  @Column({ name: 'perencana_pemasukkan' })
  perencanaPemasukkan: string;

  @Column({ name: 'perihal3' })
  perihal3: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'poin1' })
  poin1: string;

  @Column({ name: 'prinsip' })
  prinsip: string;

  @Column({ name: 'Sewa_menyewa' })
  SewaMenyewa: string;

  @Column({ name: 'Siup' })
  Siup: string;

  @Column({ name: 'Skdu' })
  Skdu: string;

  @Column({ name: 'skkh' })
  skkh: string;

  @Column({ name: 'strain' })
  strain: string;

  @Column({ name: 'Surat_Permohonan' })
  Surat_Permohonan: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'Tanggal_pemasukkan' })
  TanggalPemasukkan: string;

  @Column({ name: 'Tdp' })
  Tdp: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tipe_jumlah' })
  tipeJumlah: string;

  @Column({ name: 'tujuan' })
  tujuan: string;

  @Column({ name: 'ukl_upl' })
  uklUpl: string;
}
