import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sale_shipping', schema: 'erp_pelanggan' })
export class PelangganSaleShipping {
  @Column({ name: 'biaya_ekspedisi', nullable: true })
  biayaEkspedisi: number;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'driver_name', nullable: true })
  driverName: string;

  @PrimaryColumn({ name: 'id_sale_shipping' })
  idSaleShipping: string;

  @Column({ name: 'id_sales_penjualan' })
  idSalesPenjualan: string;

  @Column({ name: 'nama_ekspedisi', nullable: true })
  namaEkspedisi: string;

  @Column({ name: 'no_polisi', nullable: true })
  noPolisi: string;

  @Column({ name: 'nomor_resi', nullable: true })
  nomorResi: string;

  @Column({ name: 'nomor_surat_jalan' })
  nomorSuratJalan: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'tanggal_kirim' })
  tanggalKirim: string;

  @Column({ name: 'tipe_pengiriman', nullable: true })
  tipePengiriman: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
