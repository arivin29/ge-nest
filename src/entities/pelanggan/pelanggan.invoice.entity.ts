import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'invoice', schema: 'erp_pelanggan' })
export class PelangganInvoice {
  @Column({ name: 'alamat_penagihan', nullable: true })
  alamatPenagihan: string;

  @Column({ name: 'amount_paid', nullable: true })
  amountPaid: number;

  @Column({ name: 'bill_tujuan', nullable: true })
  billTujuan: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'dpp', nullable: true })
  dpp: number;

  @Column({ name: 'form_module', nullable: true })
  formModule: string;

  @Column({ name: 'from_module_id', nullable: true })
  fromModuleId: string;

  @Column({ name: 'id_client', nullable: true })
  idClient: string;

  @PrimaryColumn({ name: 'id_invoice' })
  idInvoice: string;

  @Column({ name: 'jatuh_tempo', nullable: true })
  jatuhTempo: number;

  @Column({ name: 'jenis_invoice', nullable: true })
  jenisInvoice: string;

  @Column({ name: 'metode_pembayaran', nullable: true })
  metodePembayaran: string;

  @Column({ name: 'nilai_invoice', nullable: true })
  nilaiInvoice: number;

  @Column({ name: 'nomor_faktur', nullable: true })
  nomorFaktur: string;

  @Column({ name: 'nomor_invoice', nullable: true })
  nomorInvoice: string;

  @Column({ name: 'npwp', nullable: true })
  npwp: string;

  @Column({ name: 'periode', nullable: true })
  periode: string;

  @Column({ name: 'pic_penagihan', nullable: true })
  picPenagihan: string;

  @Column({ name: 'pic_penagihan_phone', nullable: true })
  picPenagihanPhone: string;

  @Column({ name: 'ppn', nullable: true })
  ppn: number;

  @Column({ name: 'rekening', nullable: true })
  rekening: string;

  @Column({ name: 'remaining_amount', nullable: true })
  remainingAmount: number;

  @Column({ name: 'status_pembayaran', nullable: true })
  statusPembayaran: string;

  @Column({ name: 'tanggal_dibayar', nullable: true })
  tanggalDibayar: string;

  @Column({ name: 'tanggal_terbit', nullable: true })
  tanggalTerbit: string;

  @Column({ name: 'top_catatan', nullable: true })
  topCatatan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
