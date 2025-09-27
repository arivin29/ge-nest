import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipal', schema: 'new_bpt' })
export class NewBptOnlIpal {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipal' })
  idOnlIpal: number;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'jumlah_hk' })
  jumlahHk: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'kapasitas_produksi' })
  kapasitasProduksi: string;

  @Column({ name: 'lokasi_pembuangan' })
  lokasiPembuangan: string;

  @Column({ name: 'periode' })
  periode: string;

  @Column({ name: 'sistem_pengolahan' })
  sistemPengolahan: string;

  @Column({ name: 'tahun_operasi' })
  tahunOperasi: string;

  @Column({ name: 'volume' })
  volume: string;
}
