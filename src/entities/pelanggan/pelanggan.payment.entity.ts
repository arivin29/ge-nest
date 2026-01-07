import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'payment', schema: 'erp_pelanggan' })
export class PelangganPayment {
  @PrimaryColumn({ name: 'id_payment' })
  idPayment: string;

  @Column({ name: 'payment_type' })
  paymentType: string;

  @Column({ name: 'from_module', nullable: true })
  fromModule: string;

  @Column({ name: 'from_module_id', nullable: true })
  fromModuleId: string;

  @Column({ name: 'from_module_number', nullable: true })
  fromModuleNumber: string;

  @Column({ name: 'nomor_payment' })
  nomorPayment: string;

  @Column({ name: 'reference_number', nullable: true })
  referenceNumber: string;

  @Column({ name: 'tanggal_payment' })
  tanggalPayment: string;

  @Column({ name: 'tanggal_jatuh_tempo', nullable: true })
  tanggalJatuhTempo: string;

  @Column({ name: 'jumlah' })
  jumlah: number;

  @Column({ name: 'total_invoice', nullable: true })
  totalInvoice: number;

  @Column({ name: 'sisa_tagihan', nullable: true })
  sisaTagihan: number;

  @Column({ name: 'currency', nullable: true })
  currency: string;

  @Column({ name: 'exchange_rate', nullable: true })
  exchangeRate: number;

  @Column({ name: 'metode', nullable: true })
  metode: string;

  @Column({ name: 'id_bank_account', nullable: true })
  idBankAccount: string;

  @Column({ name: 'coa', nullable: true })
  coa: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'is_reconciled', nullable: true })
  isReconciled: boolean;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'approved_by', nullable: true })
  approvedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
