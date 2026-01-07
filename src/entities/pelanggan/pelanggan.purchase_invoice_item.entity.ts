import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'purchase_invoice_item', schema: 'erp_pelanggan' })
export class PelangganPurchaseInvoiceItem {
  @PrimaryColumn({ name: 'id_purchase_invoice_item' })
  idPurchaseInvoiceItem: string;

  @Column({ name: 'id_purchase_invoice' })
  idPurchaseInvoice: string;

  @Column({ name: 'id_purchase_order_item', nullable: true })
  idPurchaseOrderItem: string;

  @Column({ name: 'id_sales_barang' })
  idSalesBarang: string;

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
}
