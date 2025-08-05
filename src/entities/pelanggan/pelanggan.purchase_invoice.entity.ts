import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'purchase_invoice', schema: 'erp_pelanggan' })
export class PelangganPurchaseInvoice {
  @Column({ name: 'amount_paid', nullable: true })
  amountPaid: number;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'grand_total', nullable: true })
  grandTotal: number;

  @Column({ name: 'id_client' })
  idClient: string;

  @PrimaryColumn({ name: 'id_purchase_invoice' })
  idPurchaseInvoice: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'jenis', nullable: true })
  jenis: string;

  @Column({ name: 'nomor_invoice' })
  nomorInvoice: string;

  @Column({ name: 'payment_status', nullable: true })
  paymentStatus: string;

  @Column({ name: 'remaining_amount', nullable: true })
  remainingAmount: number;

  @Column({ name: 'sisa_tagihan', nullable: true })
  sisaTagihan: number;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'tanggal_invoice' })
  tanggalInvoice: string;

  @Column({ name: 'tanggal_jatuh_tempo', nullable: true })
  tanggalJatuhTempo: string;

  @Column({ name: 'total_diskon', nullable: true })
  totalDiskon: number;

  @Column({ name: 'total_harga', nullable: true })
  totalHarga: number;

  @Column({ name: 'total_pajak', nullable: true })
  totalPajak: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
