import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sales_barang', schema: 'erp_pelanggan' })
export class PelangganSalesBarang {
  @PrimaryColumn({ name: 'id_sales_barang' })
  idSalesBarang: string;

  @Column({ name: 'kategori', nullable: true })
  kategori: string;

  @Column({ name: 'kode_barang', nullable: true })
  kodeBarang: string;

  @Column({ name: 'nama_barang' })
  namaBarang: string;

  @Column({ name: 'deskripsi', nullable: true })
  deskripsi: string;

  @Column({ name: 'satuan', nullable: true })
  satuan: string;

  @Column({ name: 'harga_jual', nullable: true })
  hargaJual: number;

  @Column({ name: 'harga_modal', nullable: true })
  hargaModal: number;

  @Column({ name: 'serial_number', nullable: true })
  serialNumber: string;

  @Column({ name: 'tipe_barang', nullable: true })
  tipeBarang: string;

  @Column({ name: 'pajak_persen', nullable: true })
  pajakPersen: number;

  @Column({ name: 'status_sales_barang', nullable: true })
  statusSalesBarang: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
