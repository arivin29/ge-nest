import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'purchase_order_item', schema: 'erp_pelanggan' })
export class PelangganPurchaseOrderItem {
  @Column({ name: 'diskon_nominal', nullable: true })
  diskonNominal: number;

  @Column({ name: 'diskon_persen', nullable: true })
  diskonPersen: number;

  @Column({ name: 'from_module', nullable: true })
  fromModule: string;

  @Column({ name: 'from_module_id', nullable: true })
  fromModuleId: string;

  @Column({ name: 'from_module_nomor', nullable: true })
  fromModuleNomor: string;

  @Column({ name: 'harga_satuan' })
  hargaSatuan: number;

  @Column({ name: 'id_produk' })
  idProduk: string;

  @Column({ name: 'id_purchase_order' })
  idPurchaseOrder: string;

  @PrimaryColumn({ name: 'id_purchase_order_item' })
  idPurchaseOrderItem: string;

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
