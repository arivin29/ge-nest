import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirmphn', schema: 'new_bpt' })
export class NewBptSkIzinNirmphn {
  @Column({ name: 'Akta_Pendirian' })
  Akta_Pendirian: string;

  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'Angka_Pengenal' })
  Angka_Pengenal: string;

  @Column({ name: 'Ekor' })
  Ekor: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirmphn' })
  idSkIzinNirmphn: number;

  @Column({ name: 'identitas' })
  identitas: string;

  @Column({ name: 'ikh' })
  ikh: string;

  @Column({ name: 'Jenis_Hewan' })
  Jenis_Hewan: string;

  @Column({ name: 'judul_tingkat_olahan' })
  judulTingkatOlahan: string;

  @Column({ name: 'Kajian_Teknis' })
  Kajian_Teknis: string;

  @Column({ name: 'Keputusan_Bupati' })
  Keputusan_Bupati: string;

  @Column({ name: 'ket' })
  ket: string;

  @Column({ name: 'ket_jenis' })
  ketJenis: string;

  @Column({ name: 'ket_jumlah' })
  ketJumlah: string;

  @Column({ name: 'negara' })
  negara: string;

  @Column({ name: 'Negara_Asal' })
  Negara_Asal: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'pelabuhan' })
  pelabuhan: string;

  @Column({ name: 'pelabuhan_pemasukkan' })
  pelabuhanPemasukkan: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'periode' })
  periode: string;

  @Column({ name: 'Siup' })
  Siup: string;

  @Column({ name: 'Skdu' })
  Skdu: string;

  @Column({ name: 'Surat_Permohonan' })
  Surat_Permohonan: string;

  @Column({ name: 'tanggal_akhir' })
  tanggalAkhir: string;

  @Column({ name: 'tanggal_awal' })
  tanggalAwal: string;

  @Column({ name: 'Tdp' })
  Tdp: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tingkat_olahan' })
  tingkatOlahan: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
