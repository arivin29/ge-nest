import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'invoice', schema: 'erp_pelanggan' })
export class PelangganInvoice {
  @PrimaryColumn({ name: 'id_invoice' })
  idInvoice: string;

  @Column({ name: 'id_contract', nullable: true })
  idContract: string;

  @Column({ name: 'nomor_invoice', nullable: true })
  nomorInvoice: string;

  @Column({ name: 'periode', nullable: true })
  periode: string;

  @Column({ name: 'jenis_invoice', nullable: true })
  jenisInvoice: string;

  @Column({ name: 'dpp', nullable: true })
  dpp: number;

  @Column({ name: 'ppn', nullable: true })
  ppn: number;

  @Column({ name: 'nilai_invoice', nullable: true })
  nilaiInvoice: number;

  @Column({ name: 'status_invoice', nullable: true })
  statusInvoice: string;

  @Column({ name: 'npwp', nullable: true })
  npwp: string;

  @Column({ name: 'alamat_penagihan', nullable: true })
  alamatPenagihan: string;

  @Column({ name: 'pic_penagihan', nullable: true })
  picPenagihan: string;

  @Column({ name: 'tanggal_terbit', nullable: true })
  tanggalTerbit: string;

  @Column({ name: 'tanggal_jatuh_tempo', nullable: true })
  tanggalJatuhTempo: string;

  @Column({ name: 'tanggal_dibayar', nullable: true })
  tanggalDibayar: string;

  @Column({ name: 'metode_pembayaran', nullable: true })
  metodePembayaran: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
