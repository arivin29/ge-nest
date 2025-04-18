import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'faktur', schema: 'erp_pelanggan' })
export class PelangganFaktur {
  @PrimaryColumn({ name: 'id_faktur' })
  idFaktur: string;

  @Column({ name: 'id_invoice' })
  idInvoice: string;

  @Column({ name: 'versi_faktur', nullable: true })
  versiFaktur: number;

  @Column({ name: 'nomor_faktur', nullable: true })
  nomorFaktur: string;

  @Column({ name: 'tanggal_faktur', nullable: true })
  tanggalFaktur: string;

  @Column({ name: 'nilai_faktur', nullable: true })
  nilaiFaktur: number;

  @Column({ name: 'status_pembayaran', nullable: true })
  statusPembayaran: string;

  @Column({ name: 'tanggal_pembayaran', nullable: true })
  tanggalPembayaran: string;

  @Column({ name: 'metode_pembayaran', nullable: true })
  metodePembayaran: string;

  @Column({ name: 'nomor_referensi_pembayaran', nullable: true })
  nomorReferensiPembayaran: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'file_faktur_url', nullable: true })
  fileFakturUrl: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
