import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sale_invoice_item', schema: 'erp_pelanggan' })
export class PelangganSaleInvoiceItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'deskripsi_barang', nullable: true })
  deskripsiBarang: string;

  @Column({ name: 'diskon', nullable: true })
  diskon: number;

  @Column({ name: 'from_module_id_item' })
  fromModuleIdItem: string;

  @Column({ name: 'harga_satuan' })
  hargaSatuan: number;

  @Column({ name: 'id_invoice' })
  idInvoice: string;

  @PrimaryColumn({ name: 'id_invoice_item' })
  idInvoiceItem: string;

  @Column({ name: 'qty' })
  qty: number;

  @Column({ name: 'total_rupiah' })
  totalRupiah: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
