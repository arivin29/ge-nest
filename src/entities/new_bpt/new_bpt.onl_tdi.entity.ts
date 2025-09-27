import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tdi', schema: 'new_bpt' })
export class NewBptOnlTdi {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_kbli' })
  idKbli: string;

  @PrimaryColumn({ name: 'id_onl_tdi' })
  idOnlTdi: number;

  @Column({ name: 'investasi' })
  investasi: number;

  @Column({ name: 'kapasitas_produk' })
  kapasitasProduk: string;

  @Column({ name: 'komoditi_industri' })
  komoditiIndustri: string;

  @Column({ name: 'peralatan_pembantu' })
  peralatanPembantu: string;

  @Column({ name: 'peralatan_utama' })
  peralatanUtama: string;

  @Column({ name: 'tenaga_penggerak' })
  tenagaPenggerak: string;
}
