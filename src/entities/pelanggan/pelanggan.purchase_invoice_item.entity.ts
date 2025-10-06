import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'purchase_invoice_item', schema: 'erp_pelanggan' })
export class PelangganPurchaseInvoiceItem {
  @Column({ name: 'diskon_nominal', nullable: true })
  diskonNominal: number;

  @Column({ name: 'diskon_persen', nullable: true })
  diskonPersen: number;

  @Column({ name: 'harga_satuan' })
  hargaSatuan: number;

  @Column({ name: 'id_purchase_invoice' })
  idPurchaseInvoice: string;

  @PrimaryColumn({ name: 'id_purchase_invoice_item' })
  idPurchaseInvoiceItem: string;

  @Column({ name: 'id_purchase_order_item', nullable: true })
  idPurchaseOrderItem: string;

  @Column({ name: 'id_sales_barang' })
  idSalesBarang: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'nama_produk' })
  namaProduk: string;

  @Column({ name: 'pajak_persen', nullable: true })
  pajakPersen: number;

  @Column({ name: 'qty' })
  qty: number;

  @Column({ name: 'satuan' })
  satuan: string;

  @Column({ name: 'subtotal', nullable: true })
  subtotal: number;
}
