import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirplphp', schema: 'new_bpt' })
export class NewBptSkIzinNirplphp {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'akta_saham' })
  aktaSaham: string;

  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'halal' })
  halal: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirplphp' })
  idSkIzinNirplphp: number;

  @Column({ name: 'jenis_jumlah' })
  jenisJumlah: string;

  @Column({ name: 'jenis_produk' })
  jenisProduk: string;

  @Column({ name: 'jumlah' })
  jumlah: string;

  @Column({ name: 'kajian_teknis' })
  kajianTeknis: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'periode' })
  periode: string;

  @Column({ name: 'pernyataan' })
  pernyataan: string;

  @Column({ name: 'sartek' })
  sartek: string;

  @Column({ name: 'siup' })
  siup: string;

  @Column({ name: 'skdu' })
  skdu: string;

  @Column({ name: 'surat_permohonan' })
  suratPermohonan: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'tdp' })
  tdp: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
