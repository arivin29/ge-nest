import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'purchase_order', schema: 'erp_pelanggan' })
export class PelangganPurchaseOrder {
  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'detail_client', nullable: true })
  detailClient: string;

  @Column({ name: 'grand_total', nullable: true })
  grandTotal: number;

  @Column({ name: 'id_client', nullable: true })
  idClient: string;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @PrimaryColumn({ name: 'id_purchase_order' })
  idPurchaseOrder: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'jenis', nullable: true })
  jenis: string;

  @Column({ name: 'nama_client', nullable: true })
  namaClient: number;

  @Column({ name: 'nomor_po' })
  nomorPo: string;

  @Column({ name: 'shipping', nullable: true })
  shipping: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'tanggal_dikirim', nullable: true })
  tanggalDikirim: string;

  @Column({ name: 'tanggal_diterima', nullable: true })
  tanggalDiterima: string;

  @Column({ name: 'tanggal_po' })
  tanggalPo: string;

  @Column({ name: 'total_diskon', nullable: true })
  totalDiskon: number;

  @Column({ name: 'total_harga', nullable: true })
  totalHarga: number;

  @Column({ name: 'total_pajak', nullable: true })
  totalPajak: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
