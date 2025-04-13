import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'faktur', schema: 'erp_pelanggan' })
export class Faktur {
  @PrimaryColumn({ name: 'id_faktur' })
  idFaktur: string;

  @Column({ name: 'id_invoice' })
  idInvoice: string;

  @Column({ name: 'versi_faktur' })
  versiFaktur: number;

  @Column({ name: 'nomor_faktur' })
  nomorFaktur: string;

  @Column({ name: 'tanggal_faktur' })
  tanggalFaktur: string;

  @Column({ name: 'nilai_faktur' })
  nilaiFaktur: number;

  @Column({ name: 'status_pembayaran' })
  statusPembayaran: string;

  @Column({ name: 'tanggal_pembayaran' })
  tanggalPembayaran: string;

  @Column({ name: 'metode_pembayaran' })
  metodePembayaran: string;

  @Column({ name: 'nomor_referensi_pembayaran' })
  nomorReferensiPembayaran: string;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'file_faktur_url' })
  fileFakturUrl: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'updated_by' })
  updatedBy: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
