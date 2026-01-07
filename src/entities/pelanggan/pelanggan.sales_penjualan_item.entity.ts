import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sales_penjualan_item', schema: 'erp_pelanggan' })
export class PelangganSalesPenjualanItem {
  @PrimaryColumn({ name: 'id_sales_penjualan_item' })
  idSalesPenjualanItem: string;

  @Column({ name: 'id_sales_penjualan' })
  idSalesPenjualan: string;

  @Column({ name: 'id_sales_barang' })
  idSalesBarang: string;

  @Column({ name: 'nama_barang' })
  namaBarang: string;

  @Column({ name: 'qty', nullable: true })
  qty: number;

  @Column({ name: 'satuan', nullable: true })
  satuan: string;

  @Column({ name: 'harga_satuan', nullable: true })
  hargaSatuan: number;

  @Column({ name: 'harga_modal', nullable: true })
  hargaModal: number;

  @Column({ name: 'diskon_persen', nullable: true })
  diskonPersen: number;

  @Column({ name: 'diskon_nominal', nullable: true })
  diskonNominal: number;

  @Column({ name: 'total_rupiah', nullable: true })
  totalRupiah: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'status_pengiriman', nullable: true })
  statusPengiriman: string;
}
