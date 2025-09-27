import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipr', schema: 'new_bpt' })
export class NewBptSkIzinIpr {
  @Column({ name: 'file_lampiran' })
  fileLampiran: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipr' })
  idSkIzinIpr: number;

  @Column({ name: 'imbg', nullable: true })
  imbg: string;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'jenis_reklame' })
  jenisReklame: string;

  @Column({ name: 'jumlah_reklame' })
  jumlahReklame: string;

  @Column({ name: 'lebar' })
  lebar: number;

  @Column({ name: 'lokasi_pemasangan' })
  lokasiPemasangan: string;

  @Column({ name: 'masa_berlaku' })
  masaBerlaku: string;

  @Column({ name: 'muka' })
  muka: number;

  @Column({ name: 'naskah_reklame' })
  naskahReklame: string;

  @Column({ name: 'panjang' })
  panjang: number;

  @Column({ name: 'pekerjaan' })
  pekerjaan: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'status_lahan' })
  statusLahan: string;

  @Column({ name: 'tinggi' })
  tinggi: number;

  @Column({ name: 'ukuran_reklame' })
  ukuranReklame: string;
}
