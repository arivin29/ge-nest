import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirpphp', schema: 'new_bpt' })
export class NewBptSkIzinNirpphp {
  @Column({ name: 'adm' })
  adm: string;

  @Column({ name: 'alamat_pengirim' })
  alamatPengirim: string;

  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirpphp' })
  idSkIzinNirpphp: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'jenis_produk' })
  jenisProduk: string;

  @Column({ name: 'jumlah' })
  jumlah: string;

  @Column({ name: 'Kajian_Teknis' })
  Kajian_Teknis: string;

  @Column({ name: 'ket' })
  ket: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nkv' })
  nkv: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'periode' })
  periode: string;

  @Column({ name: 'Surat_Permohonan' })
  Surat_Permohonan: string;

  @Column({ name: 'tanggal_akhir' })
  tanggalAkhir: string;

  @Column({ name: 'tanggal_awal' })
  tanggalAwal: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'total_semua' })
  totalSemua: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
