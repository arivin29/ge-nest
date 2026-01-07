import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sales_penjualan', schema: 'erp_pelanggan' })
export class PelangganSalesPenjualan {
  @PrimaryColumn({ name: 'id_sales_penjualan' })
  idSalesPenjualan: string;

  @Column({ name: 'nomor_penjualan' })
  nomorPenjualan: string;

  @Column({ name: 'tanggal_penjualan' })
  tanggalPenjualan: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @Column({ name: 'sales', nullable: true })
  sales: string;

  @Column({ name: 'sales_fee_persen', nullable: true })
  salesFeePersen: number;

  @Column({ name: 'sales_fee_rupiah', nullable: true })
  salesFeeRupiah: number;

  @Column({ name: 'alamat_penagihan', nullable: true })
  alamatPenagihan: string;

  @Column({ name: 'alamat_pengiriman', nullable: true })
  alamatPengiriman: string;

  @Column({ name: 'subtotal', nullable: true })
  subtotal: number;

  @Column({ name: 'total_diskon', nullable: true })
  totalDiskon: number;

  @Column({ name: 'total_pajak_persen', nullable: true })
  totalPajakPersen: number;

  @Column({ name: 'total_pajak_rupiah', nullable: true })
  totalPajakRupiah: number;

  @Column({ name: 'total_penjualan', nullable: true })
  totalPenjualan: number;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'status_penjualan', nullable: true })
  statusPenjualan: string;

  @Column({ name: 'metode_pembayaran', nullable: true })
  metodePembayaran: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
