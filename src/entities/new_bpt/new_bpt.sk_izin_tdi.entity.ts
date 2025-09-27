import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tdi', schema: 'new_bpt' })
export class NewBptSkIzinTdi {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @Column({ name: 'id_kbli' })
  idKbli: string;

  @PrimaryColumn({ name: 'id_sk_izin_tdi' })
  idSkIzinTdi: number;

  @Column({ name: 'investasi' })
  investasi: number;

  @Column({ name: 'kapasitas_produk' })
  kapasitasProduk: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kbli_param' })
  kbliParam: string;

  @Column({ name: 'kbli_tahun' })
  kbliTahun: string;

  @Column({ name: 'komoditi_industri' })
  komoditiIndustri: string;

  @Column({ name: 'nipik' })
  nipik: string;

  @Column({ name: 'peralatan_pembantu' })
  peralatanPembantu: string;

  @Column({ name: 'peralatan_utama' })
  peralatanUtama: string;

  @Column({ name: 'tenaga_penggerak' })
  tenagaPenggerak: string;
}
