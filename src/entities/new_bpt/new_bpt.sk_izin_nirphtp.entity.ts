import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirphtp', schema: 'new_bpt' })
export class NewBptSkIzinNirphtp {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirphtp' })
  idSkIzinNirphtp: number;

  @Column({ name: 'identitas' })
  identitas: string;

  @Column({ name: 'jenis_hewan' })
  jenisHewan: string;

  @Column({ name: 'jumlah_ekor' })
  jumlahEkor: string;

  @Column({ name: 'Kajian_Teknis' })
  Kajian_Teknis: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'nomor_teknis' })
  nomorTeknis: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'pelabuhan' })
  pelabuhan: string;

  @Column({ name: 'Pemasukan' })
  Pemasukan: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'perihals2' })
  perihals2: string;

  @Column({ name: 'periode' })
  periode: string;

  @Column({ name: 'Propinsi' })
  Propinsi: string;

  @Column({ name: 'rekom_kesehatan_hewan' })
  rekomKesehatanHewan: string;

  @Column({ name: 'siup' })
  siup: string;

  @Column({ name: 'supplayer' })
  supplayer: string;

  @Column({ name: 'Surat_Permohonan' })
  Surat_Permohonan: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'tdp' })
  tdp: string;

  @Column({ name: 'tgl_teknis' })
  tglTeknis: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tujuan' })
  tujuan: string;

  @Column({ name: 'Usaha1' })
  Usaha1: string;

  @Column({ name: 'Usaha2' })
  Usaha2: string;
}
