import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sale_shipping_item', schema: 'erp_pelanggan' })
export class PelangganSaleShippingItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_sale_shipping' })
  idSaleShipping: string;

  @PrimaryColumn({ name: 'id_sale_shipping_item' })
  idSaleShippingItem: string;

  @Column({ name: 'id_sales_penjualan_item' })
  idSalesPenjualanItem: string;

  @Column({ name: 'qty_kirim' })
  qtyKirim: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
