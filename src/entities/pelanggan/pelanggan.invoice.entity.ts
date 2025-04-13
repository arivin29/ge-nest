import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'invoice', schema: 'erp_pelanggan' })
export class PelangganInvoice {
  @PrimaryColumn({ name: 'id_invoice' })
  idInvoice: string;

  @Column({ name: 'id_contract' })
  idContract: string;

  @Column({ name: 'nomor_invoice' })
  nomorInvoice: string;

  @Column({ name: 'periode' })
  periode: string;

  @Column({ name: 'jenis_invoice' })
  jenisInvoice: string;

  @Column({ name: 'dpp' })
  dpp: number;

  @Column({ name: 'ppn' })
  ppn: number;

  @Column({ name: 'nilai_invoice' })
  nilaiInvoice: number;

  @Column({ name: 'status_invoice' })
  statusInvoice: string;

  @Column({ name: 'npwp' })
  npwp: string;

  @Column({ name: 'alamat_penagihan' })
  alamatPenagihan: string;

  @Column({ name: 'pic_penagihan' })
  picPenagihan: string;

  @Column({ name: 'tanggal_terbit' })
  tanggalTerbit: string;

  @Column({ name: 'tanggal_jatuh_tempo' })
  tanggalJatuhTempo: string;

  @Column({ name: 'tanggal_dibayar' })
  tanggalDibayar: string;

  @Column({ name: 'metode_pembayaran' })
  metodePembayaran: string;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'updated_by' })
  updatedBy: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
