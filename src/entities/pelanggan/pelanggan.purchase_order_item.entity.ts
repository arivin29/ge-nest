import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'purchase_order_item', schema: 'erp_pelanggan' })
export class PelangganPurchaseOrderItem {
  @PrimaryColumn({ name: 'id_purchase_order_item' })
  idPurchaseOrderItem: string;

  @Column({ name: 'id_purchase_order' })
  idPurchaseOrder: string;

  @Column({ name: 'id_sales_barang' })
  idSalesBarang: string;

  @Column({ name: 'from_module_id', nullable: true })
  fromModuleId: string;

  @Column({ name: 'from_module_nomor', nullable: true })
  fromModuleNomor: string;

  @Column({ name: 'from_module', nullable: true })
  fromModule: string;

  @Column({ name: 'nama_produk' })
  namaProduk: string;

  @Column({ name: 'satuan' })
  satuan: string;

  @Column({ name: 'qty' })
  qty: number;

  @Column({ name: 'harga_satuan' })
  hargaSatuan: number;

  @Column({ name: 'diskon_persen', nullable: true })
  diskonPersen: number;

  @Column({ name: 'diskon_nominal', nullable: true })
  diskonNominal: number;

  @Column({ name: 'pajak_persen', nullable: true })
  pajakPersen: number;

  @Column({ name: 'subtotal', nullable: true })
  subtotal: number;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;
}
